import type { Education, Project, UserProfile, WorkExperience } from '$lib/types';

export async function getExperiences(): Promise<WorkExperience[]> {
	return [
		{
			jobTitle: 'Back-end Engineer',
			company: 'Trilogy',
			startWork: 'Jun 2023',
			endWork: 'Aug 2023',
			highlights: [
				'Improve S3 query of intercepted external learning apps request-response',
				'Developing Duolingo integrations',
				'Developing antipattern detection of ReadTheory',
				'Add force update functionality on chrome extensions'
			],
			stacks: [
				'TypeScript',
				'Amazon Web Services (AWS)',
				'GraphQL',
				'PostgreSQL',
				'Node.js',
				'Git',
				'AWS CDK',
				'AWS Serverless'
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
		},
		{
			jobTitle: 'Senior Backend Engineer',
			company: 'Mamikos',
			startWork: 'Apr 2020',
			endWork: 'Jul 2022',
			highlights: [
				'Lead research and development Kissflow API integration with Mamikos System',
				'Lead project initialization for managing controlled property in Mamikos',
				'Integrate Apple Sign In with mamikos login system',
				'Upgrade consultant system for sub district level mapping',
				'Improve consultant chat system that backed by Sendbird',
				'Develop API for upload chat media that stored in AWS S3',
				'Develop Landmark / Point of Interest near a listing',
				'Develop mock Infobip server for development flow',
				'Develop User-to-user report API',
				'Develop and maintain discoverability of Mamikos listing'
			],
			stacks: ['JavaScript', 'Gitlab', 'REST APIs', 'PHP', 'Laravel', 'MySQL', 'Ansible', 'Git']
		},
		{
			jobTitle: 'Xperience Backend Engineer',
			company: 'Traveloka',
			startWork: 'Sep 2017',
			endWork: 'Mar 2020',
			highlights: [
				'Develop and maintain system stability of Movies product',
				'Integrate Traveloka Movies system with 3rd Party, e.g Cinemaxx, CGV, Flix, Platinum, Major (Thailand)',
				'Migrate Cinema Services to Auto Scaling Group architecture',
				'Multi repo migration of Cinema backend codebase',
				'Create a slack bot to help service deployment',
				'Acting lead of movies backend engineer',
				'Develop and maintain discoverability of Xperience Product'
			],
			stacks: [
				'Microservices',
				'NoSQL',
				'MongoDB',
				'REST APIs',
				'Java',
				'Amazon Web Services (AWS)',
				'Git',
				'Ansible',
				'Jenkins',
				'MySQL'
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
			title: 'Portfolio Website',
			start: 'Aug 2023',
			end: 'Aug 2023',
			links: [
				{
					label: 'Live',
					url: 'https://adliih.com/'
				}
			],
			highlights: ['Fullstack project for personal portfolio website'],
			stacks: ['HTML', 'CSS', 'Typescript', 'Tailwindcss', 'DaisyUI', 'Svelte', 'Cloudflare Pages']
		},
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

export async function getUserProfile(): Promise<UserProfile> {
	return {
		title: 'Adli Ihsan Hariadi',
		subtitle: 'Backend Engineer',
		descriptions: [
			"I'm a passionate backend engineer with over {yearOfExperience} years of experience in software development. I've been deeply involved in crafting efficient and robust backend solutions for web development.",
			"In recent years, I've been working with a modern stack that includes TypeScript, Node.js, PHP, and Laravel. I find joy in leveraging the power of these technologies to build scalable and maintainable systems. Whether it's architecting APIs, implementing data processing pipelines, or fine-tuning database performance, I'm dedicated to delivering high-quality solutions that meet the needs of the ever-evolving digital landscape."
		]
	};
}
