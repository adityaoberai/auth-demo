<script>
	import { user } from '$lib/auth.js';
	import AuthTabs from '$lib/components/AuthTabs.svelte';
	import UserData from '$lib/components/UserData.svelte';
</script>

<main class="u-flex-vertical u-cross-center u-main-center">
	<section id="header" class="u-flex-vertical u-cross-center u-width-full-line">
		<img src="/appwrite.svg" alt="Appwrite logo" width="150px" />
	</section>

	<section id="core" class="u-flex-vertical u-main-center u-cross-center">
		{#if !$user}
			<AuthTabs />
		{:else}
			<UserData />
		{/if}
	</section>
</main>

<style>
	main {
		width: 100vw;
		min-height: 100vh;
	}

	#header {
		text-align: center;
		position: absolute;
		top: 0;
		margin: 1rem 0;
	}
</style>
