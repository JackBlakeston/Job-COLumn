import React from 'react';

export interface Children { children: React.ReactNode }

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

export interface city {
  index: number,
  latitude: number,
  longitude: number,
  name: string
}

// Workaround for children type of blueprint components
// TODO install new blueprint version and delete this
declare global {
  namespace JSX {
    interface IntrinsicAttributes extends React.Attributes {
      children?: React.ReactNode
    }
    interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {
      children?: React.ReactNode
    }
  }
}