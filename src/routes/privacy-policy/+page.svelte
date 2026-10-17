<script>
	import Header from '$lib/header.svelte';

	// ⚠️ C'est la SEULE version de la politique : l'app Appicole l'ouvre
	// directement depuis cette page, et les stores pointent ici.
	const updated = '17/10/2026';

	const articles = [
		{
			title: '1. Introduction',
			article: `Cette politique de confidentialité décrit la manière dont les données personnelles sont collectées et utilisées dans le cadre de l’application Appicole.

L’application est proposée dans le cadre de l’événement La Brassicole, organisé par un groupe de bénévoles (ci-après « les organisateurs »).

L’utilisation de l’application implique l’acceptation de la présente politique.`
		},
		{
			title: '2. Responsable du traitement',
			article: `Le responsable du traitement des données est :
Les organisateurs de La Brassicole
Contact : info@brassicole.be`
		},
		{
			title: '3. Données collectées',
			article: `Lors de l’utilisation de l’application, les données suivantes peuvent être collectées :
•	votre adresse e-mail, lors de la connexion via Google, Apple ou par e-mail et mot de passe (le mot de passe est géré par notre service d’authentification et ne nous est jamais lisible) ;
•	votre activité dans l’application : bières favorites, notes, badges, réponses aux quêtes, pseudo et votes dans les jeux de la soirée, dates de connexion ;
•	des données techniques de diagnostic en cas d’erreur ou de lenteur : modèle et système de l’appareil, version de l’application, écran concerné et identifiant technique de votre compte. Ni votre adresse e-mail ni votre adresse IP n’y sont jointes.

Aucune autre donnée personnelle n’est collectée sans votre consentement.`
		},
		{
			title: '4. Finalité et base légale',
			article: `Les données sont collectées afin de :
•	créer et gérer votre compte utilisateur ;
•	sauvegarder vos bières favorites, vos notes et vos badges ;
•	organiser les jeux proposés pendant la soirée ;
•	détecter et corriger les erreurs et les lenteurs de l’application.

Base légale :
•	Exécution du service (fonctionnement du compte et des fonctionnalités de l’application)
•	Intérêt légitime (bon fonctionnement et sécurité de l’application, pour les données de diagnostic)`
		},
		{
			title: '5. Fournisseurs tiers',
			article: `L’authentification peut être réalisée via des services tiers tels que :
•	Google
•	Apple

Les données de l’application sont hébergées par Supabase, dans l’Union européenne (Irlande).

Les données de diagnostic sont traitées par Sentry (Functional Software, Inc.), dans l’Union européenne.

Ces services peuvent traiter certaines données conformément à leurs propres politiques de confidentialité.`
		},
		{
			title: '6. Durée de conservation',
			article: `Votre adresse e-mail et les données liées à votre compte sont conservées tant que votre compte existe, afin de retrouver vos favoris, vos notes et vos badges d’une édition à l’autre.

Vous pouvez supprimer votre compte à tout moment depuis l’application : toutes les données qui y sont liées sont alors effacées définitivement.

Les données de diagnostic sont conservées 30 jours.`
		},
		{
			title: '7. Vos droits',
			article: `Conformément au RGPD, vous disposez des droits suivants :
•	droit d’accès à vos données ;
•	droit de rectification ;
•	droit à l’effacement ;
•	droit à la limitation du traitement ;
•	droit à la portabilité des données.

Vous pouvez supprimer votre compte à tout moment depuis l’application (Profil → Réglages → Supprimer mon compte), ou exercer ces droits en écrivant à info@brassicole.be.`
		},
		{
			title: '8. Droit de réclamation',
			article: `Vous avez également le droit d’introduire une réclamation auprès de l’autorité compétente :

Autorité de protection des données (Belgique) — www.autoriteprotectiondonnees.be`
		},
		{
			title: '9. Contact',
			article: `Pour toute question relative à cette politique : info@brassicole.be`
		}
	];
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<div class="flex flex-col gap-y-4 mt-6 p-4">
		<h1 class="font-title font-bold text-2xl text-brass-green">Politique de Confidentialité</h1>
		<p class="italic font-light text-brass-grey -mt-4">Mise à jour le {updated}</p>
		{#each articles as { title, article }}
			<div>
				<p class="font-semibold text-brass-green">{title}</p>
				<!-- `whitespace-pre-line` : garde les retours à la ligne des puces. -->
				<p class="mt-2 text-brass-green whitespace-pre-line">{article}</p>
			</div>
		{/each}
	</div>
</div>
