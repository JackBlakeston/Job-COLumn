import React from 'react';
// Package imports
import { NumericInput } from '@blueprintjs/core';

// Local imports
import GBP from './GBP/GBP';

type props = {
  defaultValue?: any,
  fill: boolean,
  onValueChange: any,
  placeholder?: string,
  className?: string
}

function Numeric ({
  defaultValue,
  fill,
  onValueChange,
  placeholder
}: props) : JSX.Element {
  return (
    <NumericInput
      defaultValue={defaultValue}
      fill={fill}
      leftIcon={<GBP />}
      majorStepSize= {10000} //worked with strings without js, didnt like them in ts, will se if this breaks everything, if so .tostring()
      min={0}
      onValueChange={onValueChange}
      placeholder={placeholder}
      stepSize= {1000} //worked with strings without js, didnt like them in ts, will se if this breaks everything, if so .tostring()
    />
  )
}

export default Numeric;
