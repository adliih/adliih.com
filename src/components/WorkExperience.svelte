<script lang="ts">
	import type { WorkExperience } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let experiences: WorkExperience[] = [];
</script>

<div>
	<h2 class="mb-8 text-2xl font-bold text-primary">Work Experiences</h2>

	<div class="flex flex-col gap-12">
		{#each experiences as experience}
			<div class="flex flex-col gap-4">
				<div class="flex flex-col justify-between lg:items-center lg:flex-row">
					<h3 class="text-xl font-semibold lg:w-1/3 text-secondary">{experience.jobTitle}</h3>
					<p class="text-gray-300">{experience.company}</p>
					<p class="text-gray-300">
						{formatDate(experience.start)} -
						{#if experience.end}
							{formatDate(experience.end)}
						{:else}
							<span class="badge badge-accent">Current</span>
						{/if}
					</p>
				</div>
				<ul class="mt-2 ml-6 list-disc">
					{#each experience.highlights as highlight}
						<li>{@html highlight.html}</li>
					{/each}
				</ul>
				<div>
					{#each experience.stacks as stack}
						<div class="m-1 badge badge-outline">{stack.name}</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
