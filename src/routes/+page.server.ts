import { HomePageStore } from '$houdini';
import { variables } from '$lib/graphql-client';
import type { Education, Project, UserProfile, WorkExperience } from '$lib/types';
import type { PageServerLoadEvent } from './$types';

interface LoadResult {
	experiences: WorkExperience[];
	educations: Education[];
	projects: Project[];
	userProfile: UserProfile;
}

export async function load(event: PageServerLoadEvent): Promise<LoadResult> {
	const store = new HomePageStore();
	const { data, errors } = await store.fetch({ event, variables });

	if (!data) {
		throw new Error(`Invalid Data, ${JSON.stringify(errors)}`);
	}

	return {
		educations: data.educations,
		experiences: data.workExperiences,
		projects: data.projects,
		userProfile: data.userProfiles[0]
	};
}
