import './App.css';
import About from './components/About';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Socials from './components/Socials';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">
        <div className='flex flex-col items-center lg:items-end leftCol w-full mt-5'>
        <About />
        <Socials />
        </div>
        <div className='middleCol'>
        <Profile />
        </div>
        <div className='rightCol w-full flex flex-col items-center lg:items-start'>
        <Projects />
        <TechStack />
        </div>
    </div>
  );
}

export default App;
