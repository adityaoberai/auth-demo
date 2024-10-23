<script>
	import { user } from '$lib/auth.js';

	function loginOauth() {
		user.oauth();
	}
</script>

<section id="oauth" class="authContainer container">
	<div id="github" class="u-flex-vertical u-gap-16 u-main-center container">
		<h2 class="heading-level-4">GitHub Login</h2>
		<button class="button" on:click={loginOauth}>
			<span class="icon-github"></span>
			Sign in with GitHub
		</button>
	</div>
</section>

<style>
	#github {
		align-items: center;
	}
</style>
