<script>
	// @ts-ignore
	import Icon from 'fa-svelte';
	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
	import { page } from '$app/stores';

	$: pathname = $page.url.pathname;

	const pages = [
		{
			href: '/',
			title: 'About'
		}
		// {
		// 	href: '/portfolio',
		// 	title: 'Portfolio'
		// }
	];

	const socials = [
		{
			icon: faLinkedin,
			href: 'https://www.linkedin.com/in/adliih/'
		},
		{
			icon: faGithub,
			href: 'https://github.com/adliih'
		},
		{
			icon: faEnvelopeOpenText,
			href: 'mailto:mail@adliih.com'
		}
	];
</script>

<div class="flex flex-row items-center justify-center h-full gap-16 lg:flex-col">
	<div class="avatar">
		<div class="w-24 mb-4 rounded-full lg:w-64">
			<img src="/profile_picture.jpg" alt="" class="object-cover object-top" />
		</div>
	</div>

	<nav class="w-full">
		<ul class="menu menu-vertical menu-lg rounded-box">
			{#each pages as page}
				<li>
					<a
						href={page.href}
						class="block py-2 text-center hover:text-accent"
						class:active-menu={pathname === page.href}>{page.title}</a
					>
				</li>
			{/each}
		</ul>
	</nav>

	<ul class="menu menu-horizontal">
		{#each socials as social}
			<li>
				<a href={social.href} class="hover:text-accent">
					<Icon icon={social.icon} />
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.active-menu {
		@apply bg-primary;
	}
</style>
