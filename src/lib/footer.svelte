<script>
	import Mailchimp from './mailchimp.svelte';
</script>

<footer class="flex flex-col w-full mt-auto">
	<div class="bg-[url('/wave.svg')] h-[75px]" />

	<div class="flex justify-evenly items-center w-full mx-auto pb-6 bg-white">
		<div>
			<div class="px-6">
				<p class="font-title text-brass-green text-xl font-bold">N'en ratez pas une goutte!</p>
				<p class="text-sm text-brass-green">
					Inscrivez-vous à notre newsletter et recevez<br />
					les dernières informations concernant la Brassicole
				</p>
			</div>
		</div>

		<Mailchimp />
	</div>
</footer>
