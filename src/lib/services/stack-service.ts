import type { Project, StackStatistic, WorkExperience } from '$lib/types';
import { StackUsageType } from '$lib/enums';
import { getStackUsageDurationInMillis, parseMonthYearToDateWithFirstDayOfMonth } from '$lib/utils';

export function extractStackStatistic(
	experiences: WorkExperience[],
	projects: Project[]
): StackStatistic[] {
	const stackStatistics: StackStatistic[] = [];

	stackStatistics.push(...experiences.flatMap(experienceToStackStatistic));
	stackStatistics.push(...projects.flatMap(projectToStackStatistic));

	return stackStatistics;
}

function experienceToStackStatistic(experience: WorkExperience): StackStatistic[] {
	const start = parseMonthYearToDateWithFirstDayOfMonth(experience.startWork);
	const end =
		(experience.endWork && parseMonthYearToDateWithFirstDayOfMonth(experience.endWork)) ||
		undefined;
	const type = StackUsageType.WORK_EXPERIENCE;
	return experience.stacks.map((stack) => ({
		stack,
		start,
		end,
		type
	}));
}

function projectToStackStatistic(project: Project): StackStatistic[] {
	const start = parseMonthYearToDateWithFirstDayOfMonth(project.start);
	const end = (project.end && parseMonthYearToDateWithFirstDayOfMonth(project.end)) || undefined;
	const type = StackUsageType.PROJECT;
	return project.stacks.map((stack) => ({
		stack,
		start,
		end,
		type
	}));
}

export function sortStackStatisticByDuration(stacks: StackStatistic[]): StackStatistic[] {
	return stacks.slice().sort((a, b) => {
		return (
			getStackUsageDurationInMillis(b.start, b.end) - getStackUsageDurationInMillis(a.start, a.end)
		);
	});
}

export function sortStackStatisticByMostRecent(stacks: StackStatistic[]): StackStatistic[] {
	return stacks.slice().sort((a, b) => {
		return (
			getStackUsageDurationInMillis(b.start, b.end) - getStackUsageDurationInMillis(a.start, a.end)
		);
	});
}
