<script>
	import EmailPassword from '$lib/components/EmailPassword.svelte';
	import EmailOtp from '$lib/components/EmailOtp.svelte';
	import Oauth from '$lib/components/Oauth.svelte';

	let tabs = {
		EmailPassword: 'emailpassword',
		EmailOtp: 'emailotp',
		OAuth: 'oauth'
	};
	let activeTab = tabs.EmailPassword;

	function emailpasswordView() {
		activeTab = tabs.EmailPassword;
	}

	function emailotpView() {
		activeTab = tabs.EmailOtp;
	}

	function oauthView() {
		activeTab = tabs.OAuth;
	}
</script>

<section class="u-flex-vertical u-gap-16 u-cross-center u-main-center">
<h1 class="heading-level-3">Try Appwrite Authentication</h1>
<section id="auth" class="u-flex-vertical u-cross-center u-gap-8">
	<div class="tabs">
		<ul class="tabs-list">
			<li class="tabs-item">
				<button class="tabs-button" on:click={emailpasswordView} class:is-selected={activeTab === tabs.EmailPassword}
					><span class="text">Email Password</span></button
				>
			</li>
			<li class="tabs-item">
				<button class="tabs-button" on:click={emailotpView} class:is-selected={activeTab === tabs.EmailOtp}
					><span class="text">Email OTP</span></button
				>
			</li>
			<li  class="tabs-item">
				<button class="tabs-button" on:click={oauthView} class:is-selected={activeTab === tabs.OAuth}
					><span class="text">GitHub OAuth</span></button
				>
			</li>
		</ul>
	</div>

	{#if activeTab === tabs.EmailPassword}
		<EmailPassword />
	{:else if activeTab === tabs.EmailOtp}
		<EmailOtp />
	{:else if activeTab === tabs.OAuth}
		<Oauth />
	{/if}
</section></section>

<style>
	#auth {
		border: 2px solid hsl(var(--color-neutral-50));
		border-radius: 1rem;
		background-color: hsl(var(--color-neutral-10));
		width: 50vw;
		height: max-content;
	}

	h1 {
		text-align: center;
	}

	@media (max-width: 1000px) {
		#auth {
			width: 80vw;
			height: 80vh;
		}
	}
</style>
