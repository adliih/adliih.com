export function getStackUsageDurationInMillis(start: Date, end?: Date): number {
	const endOrCurrentDate = end || new Date();

	return endOrCurrentDate.getTime() - start.getTime();
}
