import React from 'react';

export interface item {
  index: number,
  latitude: number,
  longitude: number,
  name: string
}

export interface modifiers {
  active: boolean
  disabled: boolean
  matchesPredicate: boolean
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