<script>
	import FooterLink from "./footerLink.svelte";

	let linkClass = 'font-body text-sm uppercase text-brass-green tracking-wide';
</script>

<footer class="flex justify-between items-center w-full pt-6 pb-2 px-2 sm:px-7 mx-auto bg-white">
	<div class="flex gap-x-3 items-center">
        <FooterLink link='/about' label='à propos' />
		<p class='font-body text-sm uppercase text-brass-green tracking-wide'>•</p>
        <FooterLink link='https://app.brassicole.be/privacy-policy/' label='politique de confidentialité' />
	</div>
	<a
		href="https://www.facebook.com/profile.php?id=100064555039934"
		target="_blank"
		class="flex items-center justify-center rounded-full bg-brass-green w-4 h-4 sm:w-6 sm:h-6"
	>
		<img src="/fb-logo.svg" alt="Facebook Logo" class="w-3 sm:w-4" />
	</a>
</footer>
