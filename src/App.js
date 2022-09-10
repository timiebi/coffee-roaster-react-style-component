import {Routes,  Route} from 'react-router-dom';


// components
import { NavView } from './views/nav/index';
import { HomeView } from './views/home';
import { HomeFooter } from "./components/homefooter";
import { AboutView } from './views/about';
import { Plan } from './views/createplan';

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
            <Route path='plan' element={<Plan/>} />
          </Routes>
          <HomeFooter/>
      </AboutProvider>

        
    </>
  );
}

export default App;
