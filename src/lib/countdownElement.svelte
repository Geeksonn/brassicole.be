<script lang="ts">
	export let text: string;
	export let time: number;
</script>

<div class="flex flex-col items-center">
	<p class="font-title text-brass-pink text-9xl font-bold">{time.toString().padStart(2, '0')}</p>
	<p class="text-brass-green uppercase text-xl tracking-[0.2em]">{text}</p>
</div>
