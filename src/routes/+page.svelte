<script lang="ts">
	import Introduction from '$components/Intoduction.svelte';
	import WorkExperienceComponent from '$components/WorkExperience.svelte';
	import type { WorkExperience } from '$lib/types';

	const experiences: WorkExperience[] = [
		{
			jobTitle: 'Software Development Engineer II',
			company: 'Lummo',
			startWork: 'Sep 2022',
			// endWork: 'Mar 2023',
			highlights: [
				'Maintain and develop authentication and authorization functionality',
				'Sync old x new user data schema',
				'Develop translation on email builder',
				'Research and Develop Automation Chat Response',
				'Integration with 3rd Automation Platform (Make / Integromat)'
			],
			stacks: [
				'TypeScript',
				'Google Cloud Platform (GCP)',
				'Google Kubernetes Engine (GKE)',
				'PostgreSQL',
				'Node.js',
				'Pubsub',
				'GraphQL',
				'Git',
				'ArgoCD'
			]
		},
		{
			jobTitle: 'Software Development Engineer II',
			company: 'Lummo',
			startWork: 'Sep 2022',
			endWork: 'Mar 2023',
			highlights: [
				'Maintain and develop authentication and authorization functionality',
				'Sync old x new user data schema',
				'Develop translation on email builder',
				'Research and Develop Automation Chat Response',
				'Integration with 3rd Automation Platform (Make / Integromat)'
			],
			stacks: [
				'TypeScript',
				'Google Cloud Platform (GCP)',
				'Google Kubernetes Engine (GKE)',
				'PostgreSQL',
				'Node.js',
				'Pubsub',
				'GraphQL',
				'Git',
				'ArgoCD'
			]
		}
	];
</script>

<div class="flex flex-col gap-4">
	<Introduction />
	<div class="divider" />
	<WorkExperienceComponent {experiences} />
</div>
