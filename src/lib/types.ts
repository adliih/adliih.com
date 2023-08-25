import type { StackUsageType } from '$lib/enums';

export interface WorkExperience {
	company: string;
	jobTitle: string;
	endWork?: string;
	startWork: string;
	stacks: string[];
	highlights: string[];
}

export interface Education {
	title: string;
	institution: string;
	start: string;
	end: string;
	items: string[];
}

export interface Project {
	title: string;
	links: { label: string; url: string }[];
	start: string;
	end: string;
	highlights: string[];
	stacks: string[];
}

export interface StackStatistic {
	stack: string;
	type: StackUsageType;
	start: Date;
	end?: Date;
}

export interface StackStatisticWithDuration {
	stack: string;
	durationInMonths: number;
}

export interface UserProfile {
	title: string;
	subtitle: string;
	descriptions: string[];
}
