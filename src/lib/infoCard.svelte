<script>
    let { bgColor, title, imgLink, imgAlt, description, callToAction, btnColor, actionLink } = $props();
</script>

<div class="flex flex-col items-center mx-auto w-[20%] bg-brass-{bgColor} rounded-3xl p-3">
	<p class="text-background text-4xl font-title font-bold text-center">{title}</p>
	<img src="/{imgLink}" alt={imgAlt} width="300" class="flex-grow" />

	<div class="w-full flex justify-around gap-x-2 items-center">
		<p class="mt-3 p-3 text-background text-center text-sm">
			{description}
		</p>
	</div>

	<a target="_blank" href={actionLink} class="mt-10 mb-6">
		<div class="mx-auto p-4 bg-brass-{btnColor} font-title text-background font-semibold rounded-lg">
			{callToAction}
		</div></a
	>
</div>