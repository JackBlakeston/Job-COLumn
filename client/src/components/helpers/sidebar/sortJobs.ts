import { job } from "../../../interfaces";

function parseDate(date: string): Date {
  return new Date(date.split('/').reverse().join('/'));
}

type sortJobsOptions = {
  category: string,
  order: string,
}

export function sortJobs(jobs: job[], {
  category,
  order
}: sortJobsOptions): job[] {

  return jobs.sort((a, b) => {
    let sortBy: string = '';
    switch (category) {
      case 'Location':
        sortBy = 'locationName';
        break;
      case 'Salary':
        sortBy = 'minimumSalary';
        break;
      case 'Expiry Date':
        sortBy = 'expirationDate';
        break;
      case 'Posted Date':
        sortBy = 'date';
        break;
      case 'Job Title':
        sortBy = 'jobTitle';
        break;
      default:
        sortBy = 'jobTitle';
    }

    let direction: number;
    const aVal = a[sortBy as keyof job];
    const bVal = b[sortBy as keyof job];
    if (sortBy === 'expirationDate' || sortBy === 'date') {
      direction = parseDate(a[sortBy]).getTime() - parseDate(b[sortBy]).getTime();
    } else if (sortBy !== 'minimumSalary') {
      if ((aVal as string).toLowerCase() > (bVal as string).toLowerCase()) direction = 1;
      else direction = -1;
    } else {
      direction = a[sortBy] - b[sortBy];
    }
    if (order === 'asc') return direction;
    return -direction;
  })
}
