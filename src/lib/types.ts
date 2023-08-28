import type { StackUsageType } from '$lib/enums';

export interface Stack {
	name: string;
}

export interface RichText {
	html: string;
}

export interface WithDuration {
	end: Date | null;
	start: Date;
}

export interface WorkExperience extends WithDuration {
	company: string;
	jobTitle: string;
	stacks: Stack[];
	highlights: RichText[];
}

export interface Education extends WithDuration {
	title: string;
	institution: string;
	items: RichText[];
}

export interface Project extends WithDuration {
	title: string;
	links: { label: string; url: string }[];
	highlights: RichText[];
	stacks: Stack[];
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
	descriptions: RichText[];
}
