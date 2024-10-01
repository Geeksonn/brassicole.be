<script>
	import EventDateCountdown from '$lib/eventDateCountdown.svelte';
	import Header from '$lib/header.svelte';
    import AddInfo from '$lib/addInfo.svelte';
    import Footer from '$lib/footer.svelte';
    import FloatingCap from '$lib/floatingCap.svelte';
	import AppInfo from '$lib/appInfo.svelte';
	import Meal from '$lib/meal.svelte';
</script>

<div class="flex flex-col sm:min-h-screen">
	<Header />
	<div class="flex flex-col sm:flex-row mt-9">
		<div class="flex flex-col sm:w-2/3 p-3">
			<EventDateCountdown />
            <div class="w-11/12 h-[1.3px] mx-auto my-5 bg-brass-orange"></div>
            <p class="sm:text-xl text-md text-brass-green mx-auto">Streekbaan 195 1800 Vilvoorde</p>
            <!--<AddInfo />-->
            <Meal />
		</div>
		<div class="sm:w-1/3 sm:py-3 sm:pl-3 p-3">
			<AppInfo />
		</div>
	</div>
	<Footer />
	<!--
	<div class="flex flex-col overflow-y-scroll">
		<EventDateCountdown />
		<img src="/line.svg" alt="vertial line" class="mx-auto my-3" />
		<p class="text-xl text-brass-green mx-auto">Streekbaan 195 1800 Vilvoorde</p>
		<!--<Meal />
        <AddInfo />
	</div>
	<Footer />
	<FloatingCap />-->
</div>
