import { StackUsageType } from '$lib/enums';
import type { StackStatistic } from '$lib/types';
import { sortAndMergeStackStatisticByDuration } from '.';

describe('sortStackStatisticByDuration', () => {
	beforeAll(() => {
		jest.useFakeTimers();
		jest.setSystemTime(new Date(2023, 8, 1));
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	it('should sort stack statistics by duration', () => {
		const stacks: StackStatistic[] = [
			{
				stack: 'JavaScript',
				start: new Date(2022, 0, 1),
				end: new Date(2022, 5, 1),
				type: StackUsageType.WORK_EXPERIENCE
			},
			{
				stack: 'React',
				start: new Date(2022, 0, 1),
				end: new Date(2022, 4, 1),
				type: StackUsageType.PROJECT
			},
			{
				stack: 'Git',
				start: new Date(2022, 2, 1),
				type: StackUsageType.PROJECT
			}
		];

		const sortedStacks = sortAndMergeStackStatisticByDuration(stacks);

		expect(sortedStacks).toEqual([
			{
				...stacks[2],
				durationInMillis: 47433600000
			},
			{
				...stacks[0],
				durationInMillis: 13046400000
			},
			{
				...stacks[1],
				durationInMillis: 10368000000
			}
		]);
	});
});
