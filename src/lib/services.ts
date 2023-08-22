import type { Education, WorkExperience } from './types';

export async function getExperiences(): Promise<WorkExperience[]> {
	return [
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
}

export async function getEducations(): Promise<Education[]> {
	return [
		{
			title: 'Bachelor of Informatics Engineering',
			institution: 'Telkom University, Bandung, Indonesia',
			start: 'Aug 2013',
			end: 'Jan 2017',
			items: ['GPA: 3.78 / 4']
		}
	];
}
