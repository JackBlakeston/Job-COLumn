export interface sort {
    category: string,
    order: string
}

export interface filter {
    keywords: string,
      cities: string[],
      salary: number
  }

  export interface user {
    location: string,
    salary: number
  }

  export interface job {
      id?: number,
      jobUrl: string,
      employerName: string,
      locationName: string,
      minimumSalary: number,
      maximumSalary: number,
      expirationDate: string,
      date: string,
      jobTitle: string,
      jobDescription: string
  }
