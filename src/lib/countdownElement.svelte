<script lang="ts">
	export let text: string;
	export let time: number;
</script>

<div class="flex flex-col items-center">
	<div class="text-center bg-brass-pink rounded-lg p-3">
		<p class="font-title text-background sm:text-3xl text-2xl font-bold">{time.toString().padStart(2, '0')}</p>
	</div>
	<p class="text-brass-green uppercase sm:text-xl text-xs tracking-[0.2em]">{text}</p>
</div>
