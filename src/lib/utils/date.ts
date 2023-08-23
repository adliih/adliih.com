/**
 * Parsing the date in string e.g:
 * - Jun 2023
 * - Aug 2023
 * - Sep 2022
 * Into a date object with the first date of the passed month
 * @param date
 * @returns
 */
export function parseMonthYearToDateWithFirstDayOfMonth(date: string) {
	return new Date(date);
}
