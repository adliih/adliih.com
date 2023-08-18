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