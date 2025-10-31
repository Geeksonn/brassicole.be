<script>
	let { bgColor, title, imgLink, imgAlt, description, callToAction, btnColor, actionLink } =
		$props();
</script>

<div class="flex flex-col items-center mx-auto w-[75%] sm:w-[20%] {bgColor} rounded-3xl p-3">
	<p class="text-background text-4xl font-title font-bold text-center">{title}</p>
	<img src="/{imgLink}" alt={imgAlt} class="grow w-[150%] max-w-[150%]" />

	<div class="w-full flex justify-around gap-x-2 items-center">
		<p class="mt-3 p-3 text-background text-center text-sm">
			{description}
		</p>
	</div>

	<a
		target="_blank"
		href={actionLink}
		class="mt-8 py-3 w-11/12 mx-6 {btnColor} font-title text-background font-semibold rounded-4xl text-center"
	>
		{callToAction}
	</a>
</div>
