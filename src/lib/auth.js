import { writable } from 'svelte/store';
import { account } from './appwrite';
import { ID, OAuthProvider } from 'appwrite';
import { goto } from '$app/navigation';
import { PUBLIC_APP_URL } from '$env/static/public';

const isBrowser = typeof window !== 'undefined';

const createUser = () => {
	const store = writable(null);

	async function init() {
		if (!isBrowser) return;

		try {
			const user = await account.get();
			store.set(user);
			console.log(user);
		} catch (e) {
			store.set(null);
		}
	}

	init();

	async function registerEmailPassword(name, email, password) {
		if (!isBrowser) return;
		await account.create(ID.unique(), email, password, name);
		await loginEmailPassword(email, password);
	}

	async function loginEmailPassword(email, password) {
		if (!isBrowser) return;
		await account.createEmailPasswordSession(email, password);
		await init();
		goto('/');
	}

	async function createEmailOtp(email) {
		if (!isBrowser) return;
		let token = await account.createEmailToken(ID.unique(), email, true);
		return token.userId;
	}

	async function verifyEmailOtp(userId, secret) {
		if (!isBrowser) return;
		await account.createSession(userId, secret);
		await init();
		goto('/');
	}

	function oauth() {
		if (!isBrowser) return;
		account.createOAuth2Session(
			OAuthProvider.Github,
			`${PUBLIC_APP_URL}`,
			`${PUBLIC_APP_URL}/failure`
		);
	}

	async function logout() {
		await account.deleteSession('current');
		store.set(null);
	}

	return {
		subscribe: store.subscribe,
		registerEmailPassword,
		loginEmailPassword,
		createEmailOtp,
		verifyEmailOtp,
		oauth,
		logout
	};
};

export const user = createUser();
