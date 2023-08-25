import type {
	Project,
	StackStatistic,
	StackStatisticWithDuration,
	WorkExperience
} from '$lib/types';
import { StackUsageType } from '$lib/enums';
import {
	getStackUsageDurationInMonths,
	mergeStackStatisticWithDuration,
	parseMonthYearToDateWithFirstDayOfMonth
} from '$lib/utils';

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

export function sortAndMergeStackStatisticByDuration(
	stacks: StackStatistic[]
): StackStatisticWithDuration[] {
	const transformedStatistics = stacks.slice().map(toStackStatisticWithDuration);

	return mergeStackStatisticWithDuration(transformedStatistics).sort((a, b) => {
		return b.durationInMonths - a.durationInMonths;
	});
}

function toStackStatisticWithDuration(stack: StackStatistic): StackStatisticWithDuration {
	return {
		stack: stack.stack,
		durationInMonths: getStackUsageDurationInMonths(stack.start, stack.end)
	};
}

export function sortStackStatisticByMostRecent(stacks: StackStatistic[]): StackStatistic[] {
	return stacks.slice().sort((a, b) => {
		return (
			getStackUsageDurationInMonths(b.start, b.end) - getStackUsageDurationInMonths(a.start, a.end)
		);
	});
}
