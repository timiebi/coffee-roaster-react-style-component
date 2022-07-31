import { BrowserRouter as Router, Routes,  Route, Link } from 'react-router-dom';

// components
import { NavView } from './views/nav/index';
import { HomeView } from './views/home';
// import { NavlistDataProvider } from './components/navData/NavlistContext';
import './App.css';

function App() {
  return (
    <>
     <Router>
        <NavView/>
        <Routes>
          <Route path='/' element ={<HomeView/>} />
        </Routes>
     </Router>
    </>
  );
}

export default App;
