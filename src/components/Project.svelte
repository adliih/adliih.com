<script lang="ts">
	import type { Project } from '$lib/types';
	import { formatDate } from '$lib/utils';
	export let projects: Project[] = [];
</script>

<div>
	<h2 class="mb-8 text-2xl font-bold text-primary">Projects</h2>

	<div class="flex flex-col gap-12">
		{#each projects as project}
			<div class="flex flex-col gap-4">
				<div class="flex flex-col justify-between lg:items-center lg:flex-row">
					<h3 class="text-xl font-semibold text-secondary">{project.title}</h3>
					<p class="text-gray-300">
						{formatDate(project.start)} -
						{#if project.end}
							{formatDate(project.end)}
						{:else}
							<span class="badge badge-accent">Current</span>
						{/if}
					</p>
				</div>
				<ul>
					{#each project.links as link}
						<li>
							<span class="font-semibold">{link.label}:</span>
							<a class="link" href={link.url}>{link.url}</a>
						</li>
					{/each}
				</ul>
				<ul class="mt-2 ml-6 list-disc">
					{#each project.highlights as highlight}
						<li>{@html highlight.html}</li>
					{/each}
				</ul>
				<div>
					{#each project.stacks as stack}
						<div class="m-1 badge badge-outline">{stack.name}</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
