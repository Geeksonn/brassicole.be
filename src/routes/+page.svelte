<script>
	import EventDateCountdown from '$lib/eventDateCountdown.svelte';
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import InfoCard from '$lib/infoCard.svelte';
</script>

<div class="flex flex-col gap-y-4 sm:gap-y-6 pt-3">
	<Header />
	<EventDateCountdown />
	<div class="h-3 sm:h-7 w-px bg-brass-orange mx-auto"></div>
	<div class="flex flex-col gap-y-0 items-center">
		<p class="sm:text-xl text-base text-brass-green mx-auto">Streekbaan 195</p>
		<p class="sm:text-xl text-base text-brass-green mx-auto">1800 Vilvoorde</p>
	</div>

	<div class="flex flex-col gap-y-2 sm:flex-row items-stretch justify-evenly">
		<InfoCard
			bgColor="bg-brass-green"
			btnColor="bg-brass-pink"
			title="Appicole"
			imgLink="Appicole.png"
			imgAlt="Smartphone"
			actionLink="https://app.brassicole.be"
			callToAction="Téléchargez-la !"
			description="Carte des bières, conseils de dégustation, notation des bières dégustées, activités exclusives"
		/>
		<InfoCard
			bgColor="bg-brass-pink"
			btnColor="bg-brass-orange"
			title="Repas"
			imgLink="repas.png"
			imgAlt="Repas"
			actionLink="https://forms.gle/8p3s6nS8wGSqY26v8"
			callToAction="Réservez votre place"
			description="Partagez un repas convivial et profitez d'une bière offerte !"
		/>
		<InfoCard
			bgColor="bg-brass-yellow"
			btnColor="bg-brass-green"
			title="Merch"
			imgLink="merch.png"
			imgAlt="Merchandising"
			actionLink="https://docs.google.com/forms/d/e/1FAIpQLSdy4CVH1YvT48KyJ1OswOzGDYEgbjiWIbss5TPKcmCKJoR-Mw/viewform"
			callToAction="Commandez vos articles"
			description="Pour cete édition anniversaire, l'équipe vous offre la possibilité de porter nos couleurs et de soutenir l'événement !"
		/>
		<InfoCard
			bgColor="bg-brass-orange"
			btnColor="bg-brass-yellow"
			title="Newsletter"
			imgLink="Newsletter.png"
			imgAlt="Newsletter"
			actionLink="https://brassicole.us16.list-manage.com/subscribe/?u=d1b28b46ef816d6d21357d396&amp;id=95044cc8ba&amp;f_id=006861e0f0"
			callToAction="Inscrivez-vous"
			description="Inscrivez-vous à notre newsletter et recevez les dernières informations concernant la Brassicole"
		/>
	</div>

	<Footer />
</div>
