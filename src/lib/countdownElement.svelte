<script lang="ts">
	export let text: string;
	export let time: number;
</script>

<div class="flex flex-col items-center">
	<div class="w-28 text-center bg-brass-pink rounded-lg p-3">
		<p class="font-title text-background text-3xl font-bold">{time.toString().padStart(2, '0')}</p>
	</div>
	<p class="text-brass-green uppercase text-xl tracking-[0.2em]">{text}</p>
</div>
