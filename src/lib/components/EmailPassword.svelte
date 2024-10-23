<script>
	import { user } from '$lib/auth.js';

	async function registerEmailPassword(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const name = formData.get('name');
		const email = formData.get('email');
		const password = formData.get('password');
		try {
			await user.registerEmailPassword(name, email, password);
		} catch (error) {
			console.error(error);
		}
	}

	async function loginEmailPassword(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const email = formData.get('email');
		const password = formData.get('password');
		try {
			await user.loginEmailPassword(email, password);
		} catch (error) {
			console.error(error);
		}
	}
</script>

<section id="emailpassword" class="authContainer twoColumn u-flex u-gap-32 container">
	<div id="register" class="u-flex-vertical u-gap-16 u-main-center container">
		<h2 class="heading-level-3">Register</h2>
		<form class="u-flex-vertical u-gap-8" on:submit={registerEmailPassword}>
			<div>
				<label for="name">Name</label>
				<input type="text" id="name" name="name" value="" autocomplete="off" required />
			</div>
			<div>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" value="" autocomplete="off" required />
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" id="password" name="password" value="" autocomplete="off" required />
			</div>
			<button class="button" type="submit">Register</button>
		</form>
	</div>

	<div id="login" class="u-flex-vertical u-gap-16 container">
		<h2 class="heading-level-3">Login</h2>
		<form class="u-flex-vertical u-gap-8" on:submit={loginEmailPassword}>
			<div>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" value="" autocomplete="off" required />
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" id="password" name="password" value="" autocomplete="off" required />
			</div>
			<button class="button" type="submit">Login</button>
		</form>
	</div>
</section>
