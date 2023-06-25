import './Style/App.css';
import './Style/Root.css';
import './Style/Menu.css';
import './Style/Auth.css';
import './Style/Media.css';
import './Style/BlogNav.css';
import Pages from './Components/Route/Pages';
// import { ColorModeContext, useMode } from './Features/Theme';
// import { CssBaseline, ThemeProvider } from '@mui/material';

const App = () => {
  // const [theme, colorMode] = useMode();

  return (
        <div className="App">
          <Pages />
        </div>
  );
}

export default App;
