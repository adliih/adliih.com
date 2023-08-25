<script lang="ts">
	import type { StackStatistic } from '$lib/types';
	import { sortAndMergeStackStatisticByDuration } from '$lib/services';
	import { formatDuration, monthsInYear } from 'date-fns';

	export let stackStatistics: StackStatistic[] = [];

	const sortedStackStatistics = sortAndMergeStackStatisticByDuration(stackStatistics);
</script>

<div class="collapse collapse-arrow">
	<input type="checkbox" />
	<div class="text-xl font-medium collapse-title">Tech Stack Statistic</div>
	<div class="collapse-content">
		<div class="grid grid-cols-3">
			{#each sortedStackStatistics as { durationInMonths, stack }}
				<div class="stat">
					<div class="stat-title">
						{formatDuration({
							years: Math.floor(durationInMonths / monthsInYear),
							months: durationInMonths % monthsInYear
						})}
					</div>
					<div class="whitespace-pre-line stat-value">{stack}</div>
				</div>
			{/each}
		</div>
	</div>
</div>
