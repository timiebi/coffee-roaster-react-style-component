import { BrowserRouter as Router, Routes,  Route, Link } from 'react-router-dom';
import { NavView } from './views/nav/index';
// import { NavlistDataProvider } from './components/navData/NavlistContext';
import './App.css';

function App() {
  return (
    <>
     <Router>
        <NavView/>
     </Router>
    </>
  );
}

export default App;
