// Package imports
import { Classes, Button, Colors } from '@blueprintjs/core';

// Local imports
import { useThemeContext } from '../../contexts/theme';
import css from '../../../App.scss';

function PrimaryButton ({
  ariaLabel,
  icon,
  onClick,
  text
}) {
  // Contexts
  const [darkMode] = useThemeContext();

  return (
    <Button
      style={{
        backgroundColor: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`,
        color: `${darkMode ? css.almostBlack : css.almostWhite}`
      }}
      aria-label={ariaLabel}
      className={Classes.SMALL}
      fill={false}
      icon={icon}
      intent='primary'
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default PrimaryButton;
