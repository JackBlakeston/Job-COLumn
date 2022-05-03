import { FormGroupProps } from '@blueprintjs/core';

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

export interface customFormGroupProps extends FormGroupProps {
  children?: React.ReactNode,
}

// Workaround for children type of blueprint components
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