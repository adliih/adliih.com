<script lang="ts">
	import type { Education } from '$lib/types';
	export let educations: Education[] = [];
</script>

<div>
	<h2 class="mb-8 text-2xl font-bold text-primary">Educations</h2>

	<div class="flex flex-col gap-12">
		{#each educations as education}
			<div class="flex flex-col gap-4">
				<div class="flex flex-col justify-between lg:items-center lg:flex-row">
					<h3 class="text-xl font-semibold text-secondary">{education.title}</h3>
					<p class="text-gray-300">{education.institution}</p>
					<p class="text-gray-300">
						{education.start} -
						{#if education.end}
							{education.end}
						{:else}
							<span class="badge badge-accent">Current</span>
						{/if}
					</p>
				</div>
				<ul class="mt-2 ml-6 list-disc">
					{#each education.items as highlight}
						<li>{highlight}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
