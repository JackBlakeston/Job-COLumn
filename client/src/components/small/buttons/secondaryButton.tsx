import React from 'react';
// Package imports
import { Classes, Button, MaybeElement } from '@blueprintjs/core';
import { BlueprintIcons_16Id } from '@blueprintjs/icons/lib/esm/generated/16px/blueprint-icons-16';


type props = {
  ariaLabel? : string,
  icon? : BlueprintIcons_16Id | MaybeElement,
  id? : string,
  onClick? : any,
  text? : string
}


function SecondaryButton ({
  ariaLabel,
  icon,
  id,
  onClick,
  text
}: props) {
  return (
    <Button
      aria-label={ariaLabel}
      className={Classes.SMALL}
      fill={false}
      icon={icon}
      id={id}
      intent='none'
      onClick={onClick}
      outlined
    >
      {text}
    </Button>
    );
}

export default SecondaryButton;
