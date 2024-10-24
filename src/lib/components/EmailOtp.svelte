<script>
	import { user } from '$lib/auth.js';

	let userId = '';

	async function createEmailOtp(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const email = formData.get('email');
		try {
			userId = await user.createEmailOtp(email);
		} catch (error) {
			console.error(error);
		}
	}

	async function verifyEmailOtp(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const otp = formData.get('otp');
		try {
			await user.verifyEmailOtp(userId, otp);
		} catch (error) {
			console.error(error);
		}
	}
</script>

<section id="emailotp" class="authContainer twoColumn u-flex u-gap-32 container">
	<div id="createotp" class="u-flex-vertical u-gap-16 u-main-center container">
		<h2 class="heading-level-4">Create OTP</h2>
		<form class="u-flex-vertical u-gap-8" on:submit={createEmailOtp}>
			<div>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" autocomplete="off" placeholder="john.doe@test.com" required />
			</div>
			<button class="button" type="submit">Send OTP on email</button>
		</form>
	</div>
	<div id="verifyotp" class="u-flex-vertical u-gap-16 container">
		<h2 class="heading-level-4">Verify OTP</h2>
		<form class="u-flex-vertical u-gap-8" on:submit={verifyEmailOtp}>
			<div>
				<label for="otp">OTP</label>
				<input type="text" id="otp" name="otp" autocomplete="off" placeholder="123456" required />
			</div>
			<button class="button" type="submit">Submit OTP</button>
		</form>
	</div>
</section>
