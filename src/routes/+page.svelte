<script>
	import EventDateCountdown from '$lib/eventDateCountdown.svelte';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import AppInfo from '$lib/appInfo.svelte';
	import Meal from '$lib/meal.svelte';
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
		<AppInfo />
		<AppInfo />
		<AppInfo />
		<AppInfo />
	</div>

	<Footer />
</div>
