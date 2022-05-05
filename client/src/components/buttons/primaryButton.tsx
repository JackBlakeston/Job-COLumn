import { Classes, Button, MaybeElement, Intent } from '@blueprintjs/core';
import { BlueprintIcons_16Id } from '@blueprintjs/icons/lib/esm/generated/16px/blueprint-icons-16';

type PrimaryButtonProps = {
  ariaLabel?: string,
  icon: BlueprintIcons_16Id | MaybeElement,
  onClick: () => void,
  text: string
}

function PrimaryButton ({
  ariaLabel,
  icon,
  onClick,
  text
}: PrimaryButtonProps): JSX.Element {
  return (
    <Button
      aria-label={ariaLabel}
      className={Classes.SMALL}
      fill={false}
      icon={icon}
      intent={Intent.PRIMARY}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default PrimaryButton;
