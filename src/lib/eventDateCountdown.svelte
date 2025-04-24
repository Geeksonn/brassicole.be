<script lang="ts">
	import CountdownElement from './countdownElement.svelte';

	//import CountdownElement from './countdownElement.svelte';

	// TODO --> fetch date
	const date: Date = new Date('2025-11-29T16:30:00Z');
	let daysLeft: number = 0,
		hoursLeft: number = 0,
		minutesLeft: number = 0,
		secondsLeft: number = 0;

	const countdown = () => {
		const dateNow: Date = new Date();
		const dateNowUTC: Date = new Date(
			Date.UTC(
				dateNow.getUTCFullYear(),
				dateNow.getUTCMonth(),
				dateNow.getUTCDate(),
				dateNow.getUTCHours(),
				dateNow.getUTCMinutes(),
				dateNow.getUTCSeconds()
			)
		);

		const timeRemaining: number = date.getTime() - dateNow.getTime();
		const seconds: number = Math.floor(timeRemaining / 1000);
		const minutes: number = Math.floor(seconds / 60);
		const hours: number = Math.floor(minutes / 60);
		const days: number = Math.floor(hours / 24);

		daysLeft = days;
		hoursLeft = hours % 24;
		minutesLeft = minutes % 60;
		secondsLeft = seconds % 60;
	};

	setInterval(countdown, 1000);

	const dateFrmt: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		day: '2-digit',
		month: 'long',
		year: 'numeric'
	};
</script>

<div class="flex flex-col items-center">
	<p class="pt-8 text-brass-green font-title font-bold text-6xl text-center">
		23<sup>e</sup> édition
	</p>
	<p class="mx-auto mb-12 text-brass-orange text-lg font-light tracking-[0.2rem] uppercase">
		{new Intl.DateTimeFormat('fr-FR', dateFrmt).format(date)}
	</p>
	<div class="flex justify-evenly gap-x-5 sm:gap-x-12 mx-auto">
		<CountdownElement text="jours" time={daysLeft} />
		<CountdownElement text="heures" time={hoursLeft} />
		<CountdownElement text="minutes" time={minutesLeft} />
		<CountdownElement text="secondes" time={secondsLeft} />
	</div>
</div>
