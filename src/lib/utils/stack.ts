import type { StackStatisticWithDuration } from '$lib/types';
import { differenceInMonths } from 'date-fns';

export function getStackUsageDurationInMonths(start: Date, end?: Date): number {
	const endOrCurrentDate = end || new Date();

	return differenceInMonths(endOrCurrentDate, start) || 1;
}

export function mergeStackStatisticWithDuration(
	stackStatistics: StackStatisticWithDuration[]
): StackStatisticWithDuration[] {
	const result: Record<string, StackStatisticWithDuration> = {};

	stackStatistics.forEach((stackStatistic) => {
		if (!result[stackStatistic.stack]) {
			result[stackStatistic.stack] = stackStatistic;
			return;
		}

		result[stackStatistic.stack].durationInMonths += stackStatistic.durationInMonths;
	});

	return Object.values(result);
}
