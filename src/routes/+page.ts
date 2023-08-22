import { getExperiences, getEducations, getProjects } from '$lib/services';

export async function load() {
	const [experiences, educations, projects] = await Promise.all([
		getExperiences(),
		getEducations(),
		getProjects()
	]);
	return { experiences, educations, projects };
}
