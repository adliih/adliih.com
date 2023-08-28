import type { StackStatistic, StackStatisticWithDuration } from '$lib/types';
import { getStackUsageDurationInMonths, mergeStackStatisticWithDuration } from '$lib/utils';

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
