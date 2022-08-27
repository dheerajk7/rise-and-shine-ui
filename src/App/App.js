import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesList from '../routes';

function App() {
  return (
    <Router>
      <div className="App"></div>
      <RoutesList />
    </Router>
  );
}

export default App;
