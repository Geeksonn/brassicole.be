<script lang="ts">
	export let text: string;
	export let time: number;
</script>

<div class="flex flex-col items-center">
	<div class="px-2 w-20 md:w-44 lg:w-56 xl:w-64 text-center">
		<p class="font-title text-brass-pink text-3xl md:text-4xl lg:text-6xl xl:text-9xl font-bold">
			{time.toString().padStart(2, '0')}
		</p>
	</div>

	<p class="text-brass-green uppercase md:text-xl text-xs tracking-[0.2em]">{text}</p>
</div>
