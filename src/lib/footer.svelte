<script>
	import Mailchimp from './mailchimp.svelte';
</script>

<footer class="flex flex-col w-full mt-auto">
	<div class="sm:bg-[url('/wave.svg')] sm:h-[40px]" />

	<div class="flex flex-col gap-y-3 sm:flex-row justify-evenly items-center w-full mx-auto pb-6 bg-white">
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
    <div class="flex justify-end px-4 bg-white">
        <p class="text-xs text-brass-grey">Consultez notre <a href="https://app.brassicole.be/privacy-policy/" class="underline">politique de Confidentialité</a>.</p>
    </div>
</footer>
