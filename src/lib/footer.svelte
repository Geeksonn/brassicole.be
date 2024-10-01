<script>
	import Mailchimp from './mailchimp.svelte';
</script>

<footer class="flex flex-col w-full mt-auto">
	<div class="sm:bg-[url('/wave.svg')] sm:h-[75px]" />

	<div class="flex flex-col gap-y-3 pt-6 sm:pt-0 mt-4 sm:mt-0 sm:flex-row justify-evenly items-center w-full mx-auto pb-6 bg-white">
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
