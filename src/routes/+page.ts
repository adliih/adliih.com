import { getExperiences, getEducations, getProjects, getUserProfile } from '$lib/services';

export async function load() {
	const [experiences, educations, projects, userProfile] = await Promise.all([
		getExperiences(),
		getEducations(),
		getProjects(),
		getUserProfile()
	]);
	return { experiences, educations, projects, userProfile };
}
