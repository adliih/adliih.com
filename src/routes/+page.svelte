<script lang="ts">
	import EducationComponent from '$components/Education.svelte';
	import Introduction from '$components/Introduction.svelte';
	import WorkExperienceComponent from '$components/WorkExperience.svelte';
	import type { WorkExperience, Education } from '$lib/types';

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

	const educations: Education[] = [
		{
			title: 'Bachelor of Informatics Engineering',
			institution: 'Telkom University, Bandung, Indonesia',
			start: 'Aug 2013',
			end: 'Jan 2017',
			items: ['GPA: 3.78 / 4']
		}
	];
</script>

<div class="flex flex-col gap-4">
	<Introduction />
	<div class="divider" />
	<WorkExperienceComponent {experiences} />
	<div class="divider" />
	<EducationComponent {educations} />
</div>
