export function dateStringToDate(dateString: string): Date {
  let validDate = dateString.match(/(\d\d)\/(\d\d)\/(\d{4})/);
  if (validDate) {
    const [_, day, month, year] = validDate;
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  } else {
    throw new Error('Invalid date to parse');
  }
}
