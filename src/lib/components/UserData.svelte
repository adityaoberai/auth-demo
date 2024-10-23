<script>
    import { user } from '$lib/auth.js';

    async function logout() {
		try {
			await user.logout();
		} catch (error) {
			console.error(error);
		}
	}
</script>

<section id="user" class="u-flex-vertical u-cross-center u-gap-16 container">
    <h1 class="heading-level-3">User Data</h1>
    <code>{JSON.stringify($user, undefined, 2)}</code>
    <button id="logout" class="button" on:click={logout}>Log out</button>
</section>

<style>
    code {
		white-space: pre;
        border: 2px solid hsl(var(--color-neutral-50));
		border-radius: 1rem;
		background-color: hsl(var(--color-neutral-10));
        padding: 1rem;
        color: hsl(var(--color-neutral-105));
	}
</style>