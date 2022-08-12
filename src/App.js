import {Routes,  Route, Link } from 'react-router-dom';


// components
import { NavView } from './views/nav/index';
import { HomeView } from './views/home';
import { HomeFooter } from "./components/homefooter";
import { AboutView } from './views/about';

// context
import { AboutProvider } from './context';


// import { NavlistDataProvider } from './components/navData/NavlistContext';
import './App.css';



function App() {
  return (
    <>
      <AboutProvider>
        <NavView/>
          <Routes>
            <Route path='/' exact element ={<HomeView/>}/>
            <Route path='about' element={<AboutView/>}/>
          </Routes>
          <HomeFooter/>
      </AboutProvider>
        
    </>
  );
}

export default App;
