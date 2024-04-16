import './App.css';
import About from './components/About';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Socials from './components/Socials';
import TechStack from './components/TechStack';


function App() {
  return (
    <>
    <div className="App">
        
        <div className='leftCol flex flex-col items-center lg:items-end  w-full mt-5 xl:mt-0'>
        <About />
        <Socials />
        </div>
        <div className='middleCol '>
        <Profile />
        </div>
        <div className='rightCol flex flex-col items-center lg:items-start  w-full mt-5 xl:mt-0'>
        <Projects />
        <TechStack />
        </div>
    </div>
    </>
    
  );
}

export default App;
