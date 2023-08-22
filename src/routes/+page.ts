import { getExperiences, getEducations } from '$lib/services';

export async function load() {
	const [experiences, educations] = await Promise.all([getExperiences(), getEducations()]);
	return { experiences, educations };
}
