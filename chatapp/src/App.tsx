import './Style/App.css';
import './Style/Root.css';
import './Style/Menu.css';
import './Style/Auth.css';
import './Style/Media.css';
import './Style/BlogNav.css';
import './Style/Profile.css';
import Pages from './Components/Route/Pages';

const App = () => {

  return (
        <div className="App">
          <Pages />
        </div>
  );
}

export default App;
