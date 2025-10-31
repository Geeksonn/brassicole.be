<script>
	import EventDateCountdown from '$lib/eventDateCountdown.svelte';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import AppInfo from '$lib/appInfo.svelte';
	import Meal from '$lib/meal.svelte';
	import InfoCard from '$lib/infoCard.svelte';
</script>

<div class="flex flex-col gap-y-6 pt-6 sm:min-h-screen">
	<div class="mx-auto">
		<a href="/"> <img src="/brassicoleLogo.svg" alt="brassicole Logo" class="mx-auto" /></a>
	</div>
	<EventDateCountdown />
	<div class="h-7 w-[1px] bg-brass-orange mx-auto"></div>
	<div class="flex flex-col gap-y-0 items-center">
		<p class="sm:text-xl text-base text-brass-green mx-auto">Streekbaan 195</p>
		<p class="sm:text-xl text-base text-brass-green mx-auto">1800 Vilvoorde</p>
	</div>

	<div class="flex items-center justify-evenly">
		<InfoCard
			bgColor="green"
			btnColor="pink"
			title="Appicole"
			imgLink="Appicole.png"
			imgAlt="Smartphone"
			actionLink="https://app.brassicole.be"
			callToAction="Téléchargez-la !"
			description="Carte des bières, conseils de dégustation, notation des bières dégustées, activités exclusives"
		/>
		<InfoCard
			bgColor="pink"
			btnColor="orange"
			title="Repas"
			imgLink="repas.png"
			imgAlt="Repas"
			actionLink="https://app.brassicole.be"
			callToAction="Réservez votre place"
			description="Partagez un repas convivial et profitez d'une bière offerte !"
		/>
		<InfoCard
			bgColor="yellow"
			btnColor="green"
			title="Merch"
			imgLink="merch.png"
			imgAlt="Merchandising"
			actionLink="https://app.brassicole.be"
			callToAction="Commandez vos articles"
			description="Pour cete édition anniversaire, l'équipe vous offre la possibilité de porter nos couleurs et de soutenir l'événement !"
		/>
		<InfoCard
			bgColor="orange"
			btnColor="yellow"
			title="Newsletter"
			imgLink="Newsletter.png"
			imgAlt="Newsletter"
			actionLink="https://app.brassicole.be"
			callToAction="Inscrivez-vous"
			description="Inscrivez-vous à notre newsletter et recevez les dernières informations concernant la Brassicole"
		/>
	</div>

	<Footer />
</div>
