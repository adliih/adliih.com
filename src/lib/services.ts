import type { Education, Project, WorkExperience } from './types';

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

export async function getProjects(): Promise<Project[]> {
	return [
		{
			title: 'MarineDB',
			start: 'May 2023',
			end: 'Jul 2023',
			links: [
				{
					label: 'Demo',
					url: 'https://marinedb.up.railway.app/'
				}
			],
			highlights: [
				'Site to view the list, detail of registered chemical compounds, download compound structures'
			],
			stacks: ['HTML', 'CSS', 'PHP', 'Laravel', 'JavaScript', 'Inertia.js', 'React', 'MySQL']
		},
		{
			title: 'Tel-U Event Information System',
			start: 'Dec 2016',
			end: 'Dec 2017',
			links: [
				{
					label: 'Web URL',
					url: 'https://eis.telkomuniversity.ac.id/'
				}
			],
			highlights: [
				'Event management, event reporting, event attendance confirmation that integrated with Google Calendar'
			],
			stacks: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'JavaScript', 'jQuery', 'MySQL']
		}
	];
}
