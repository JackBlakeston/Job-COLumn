import { filter, job } from "../../../interfaces";

export function filterJobs (jobs: job[], filters: filter): job[] {
  const { keywords, cityNames, salary } = filters;

  return jobs.filter(job => {
    let result = true;
    if (keywords) {
      result &&= keywords.split(' ')
        .every(keyword => (
          job
            .jobTitle
            .toLowerCase()
            .includes(keyword.toLowerCase())
          || job
            .jobDescription
            .toLowerCase()
            .includes(keyword.toLowerCase())
        ))
    }
    if (cityNames.length) {
      result &&= cityNames.includes(job.locationName);
    }
    if (salary) {
      result &&= job.minimumSalary >= salary;
    }
    return result;
  })
}