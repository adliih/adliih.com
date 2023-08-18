<script>
	// @ts-ignore
	import Icon from 'fa-svelte';
	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

	const pages = [
		{
			href: '/about',
			title: 'About'
		},
		{
			href: '/portfolio',
			title: 'Portfolio'
		}
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

<div class="flex flex-col items-center justify-center h-full gap-16">
	<div class="avatar">
		<div class="w-24 rounded">
			<img src="/placeholder.svg" alt="Profile Picture" class="w-48 h-48 mb-4 rounded-full" />
		</div>
	</div>

	<nav class="w-full">
		<ul class="menu menu-vertical menu-lg rounded-box">
			{#each pages as page}
				<li>
					<a href={page.href} class="block py-2 text-center hover:text-accent">{page.title}</a>
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
