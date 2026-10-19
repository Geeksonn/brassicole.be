<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';

	type Platform = 'ios' | 'android';

	const APP_STORE_URL = 'https://apps.apple.com/app/id6765744136';
	const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.geekson.appicole';

	const title = "Appicole, le compagnon idéal de l'événement";
	const description =
		'Carte des bières, conseils de dégustation, notation des bières dégustées, activités exclusives';

	let src = $state('site');
	let platform: Platform | undefined = $state();
	let redirecting = $state(false);

	const playStoreUrl = $derived(
		`${PLAY_STORE_URL}&referrer=${encodeURIComponent(`utm_source=${src}`)}`
	);

	// Le bouton de la plateforme détectée passe en premier, au cas où la redirection serait bloquée
	const stores = $derived.by(() => {
		const all = [
			{ platform: 'ios', label: "Télécharger sur l'App Store", href: APP_STORE_URL },
			{ platform: 'android', label: 'Télécharger sur Google Play', href: playStoreUrl }
		];
		return platform === 'android' ? all.reverse() : all;
	});

	const detectPlatform = (): Platform | undefined => {
		const ua = navigator.userAgent;
		if (/android/i.test(ua)) return 'android';
		if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
		// iPadOS se déclare comme un Mac
		if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return 'ios';
		return undefined;
	};

	onMount(() => {
		const params = new URLSearchParams(location.search);
		src = params.get('src') || 'site';
		platform = detectPlatform();

		if (platform && !params.has('stay')) {
			redirecting = true;
			// replace() : le retour arrière ne revient pas sur cette page
			location.replace(platform === 'ios' ? APP_STORE_URL : playStoreUrl);
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://brassicole.be/Appicole.png" />
</svelte:head>

<div class="flex flex-col gap-y-6 min-h-screen pt-3">
	<Header />

	<main class="px-4">
		<div
			class="flex flex-col sm:flex-row items-center sm:gap-x-6 max-w-md sm:max-w-3xl mx-auto bg-brass-green rounded-3xl p-3 sm:p-6"
		>
			<img src="/Appicole.png" alt="L'app Appicole sur smartphone" class="w-full sm:w-1/2" />

			<div class="flex flex-col items-center w-full sm:w-1/2">
				<h1 class="text-background text-4xl font-title font-bold text-center">Appicole</h1>
				<p class="mt-2 text-background font-title text-xl text-center">
					Le compagnon idéal de l'événement
				</p>
				<p class="mt-3 p-3 text-background text-center text-sm">{description}</p>

				{#if redirecting}
					<p role="status" class="mt-3 text-background text-center text-sm">
						Ouverture du store en cours…
					</p>
				{/if}

				<div class="flex flex-col gap-y-3 w-11/12 mt-5 mb-3">
					{#each stores as store (store.platform)}
						<a
							href={store.href}
							class="py-3 bg-brass-pink font-title text-brass-green font-semibold rounded-4xl text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
						>
							{store.label}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<p class="mt-4 text-center text-sm text-brass-green">
			Besoin d'aide ?
			<a
				href="/app-support"
				class="underline text-brass-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-green"
				>Consultez la page de support</a
			>
		</p>
	</main>

	<div class="mt-auto">
		<Footer />
	</div>
</div>
