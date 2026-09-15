<script>
	import Header from '$lib/header.svelte';

	const articles = [
		{
			title: '1. Introduction',
			article: `Cette politique détaille ce que nous faisons de vos informations personnelles. Dans le cadre
			de son fonctionnement, l'application Appicole est amenée à collecter certaines données
			personnelles. Utiliser l'application signifie que vous acceptez avec cette politique de
			confidentialité.`
		},
		{
			title: '2. Collecte des données personnelles',
			article: `Au travers de la connexion à cette application, nous récoltons votre adresse e-mail liée à votre
			compte Google ou Facebook (en fonction de votre choix de connexion).`
		},
		{
			title: '3. Utilisation de vos informations personnelles',
			article: `L'e-mail est utilisée pour vous enregistrer en tant qu'utilisateur de l'application. Ceci nous
			permet de conserver vos bières favorites ainsi que les notes que vous avez donné à celles-ci.`
		},
		{
			title: '4. Durée de rétention',
			article: `Etant donné que votre adresse e-mail nous permet de vous identifier et de lier vos choix de
			bières favorites et leurs notes, nous conservons votre adresse e-mail pour une durée maximale de 2 ans,
			après la dernière connexion. Chaque connexion à l'application étend, donc, la durée pour une nouvelle
			période de 2 ans.`
		},
		{
			title: '5. Vos droits concernant vos données personnelles',
			article: `A tout moment, sur demande explicite via notre adresse e-mail 'info@brassicole.be', vous avez
			le droit de consulter les données liées à votre adresse e-mail et vous avez également le droit de
			demander l'effacement complet et irréversible de vos données.`
		},
		{
			title: '6. Contact',
			article: `L'unique moyen de nous contacter au sujet de cette politique de confidentialité est de nous
			écrire via e-mail à l'adresse 'info@brassicole.be'`
		}
	];
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<div class="flex flex-col gap-y-4 mt-6 p-4">
		<h1 class="font-title font-bold text-2xl text-brass-green">Politique de Confidentialité</h1>
		<p class="italic font-light text-brass-grey -mt-4">Mise à jour le 21/10/2023</p>
		{#each articles as { title, article }}
			<div>
				<p class="font-semibold text-brass-green">{title}</p>
				<p class="mt-2 text-brass-green">{article}</p>
			</div>
		{/each}
	</div>
</div>
