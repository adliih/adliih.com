import { StackUsageType } from '$lib/enums';
import type { Project, StackStatistic, WorkExperience } from '$lib/types';
import { extractStackStatistic, sortAndMergeStackStatisticByDuration } from '.';

describe('extractStackStatistic', () => {
	it('should return an array of StackStatistic objects', () => {
		const experiences = [
			{
				startWork: 'Jan 2022',
				stacks: ['JavaScript', 'React']
			},
			{
				startWork: 'Feb 2021',
				endWork: 'Dec 2021',
				stacks: ['Node.js']
			}
		] as Partial<WorkExperience[]> as WorkExperience[];

		const projects = [
			{
				start: 'Mar 2022',
				stacks: ['TypeScript', 'React']
			},
			{
				start: 'Apr 2021',
				end: 'Jun 2021',
				stacks: ['Vue.js']
			}
		] as Partial<Project[]> as Project[];

		const stackStatistics = extractStackStatistic(experiences, projects);

		expect(stackStatistics).toEqual<StackStatistic[]>([
			{
				stack: 'JavaScript',
				start: new Date(2022, 0, 1),
				end: undefined,
				type: StackUsageType.WORK_EXPERIENCE
			},
			{
				stack: 'React',
				start: new Date(2022, 0, 1),
				end: undefined,
				type: StackUsageType.WORK_EXPERIENCE
			},
			{
				stack: 'Node.js',
				start: new Date(2021, 1, 1),
				end: new Date(2021, 11, 1),
				type: StackUsageType.WORK_EXPERIENCE
			},
			{
				stack: 'TypeScript',
				start: new Date(2022, 2, 1),
				end: undefined,
				type: StackUsageType.PROJECT
			},
			{
				stack: 'React',
				start: new Date(2022, 2, 1),
				end: undefined,
				type: StackUsageType.PROJECT
			},
			{
				stack: 'Vue.js',
				start: new Date(2021, 3, 1),
				end: new Date(2021, 5, 1),
				type: StackUsageType.PROJECT
			}
		]);
	});
});

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
