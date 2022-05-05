import { NavigateFunction, useNavigate } from 'react-router-dom';
import Button from './secondaryButton';

function BackButton (): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Button
      ariaLabel='Back button'
      icon='arrow-left'
      onClick={() => navigate(-1)}
      text='Back'
    />
  );
}

export default BackButton;
