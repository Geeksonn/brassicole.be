<script lang="ts">
	export let text: string;
	export let time: number;
</script>

<div class="flex flex-col items-center">
	<div class="px-2 w-48 text-center">
		<p class="font-title text-brass-pink text-9xl font-bold">
			{time.toString().padStart(2, '0')}
		</p>
	</div>

	<p class="text-brass-green uppercase sm:text-xl text-xs tracking-[0.2em]">{text}</p>
</div>
