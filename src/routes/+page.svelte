<script>
	import EventDateCountdown from '$lib/eventDateCountdown.svelte';
	import FloatingCap from '$lib/floatingCap.svelte';
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import Meal from '$lib/meal.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />
    <div class="flex flex-col overflow-y-scroll">
		<EventDateCountdown />
		<img src="/line.svg" alt="vertial line" class="mx-auto my-3" />
		<p class="text-xl text-brass-green mx-auto">Streekbaan 195 1800 Vilvoorde</p>
		<Meal /></div>
	<Footer />
    <FloatingCap />
</div>
