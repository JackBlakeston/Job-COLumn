// Local imports
import { useThemeContext } from '../../contexts/theme';
import Button from './secondaryButton';


type props = {
  text?: string
}
function ToggleDarkMode ({ text }: props) {
  // Contexts
  const [darkMode, toggleTheme] = useThemeContext();

  return (
    <Button
      ariaLabel={`Toggle Dark Mode`}
      icon={darkMode ? 'flash' : 'moon'}
      onClick={toggleTheme}
      text={text}
    />
  )
}

export default ToggleDarkMode;
