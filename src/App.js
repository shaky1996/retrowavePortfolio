import './App.css';
import About from './components/About';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Socials from './components/Socials';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">
        <div className='leftCol'>
        <About />
        <Socials />
        </div>
        <div className='middleCol'>
        <Profile />
        </div>
        <div className='rightCol'>
        <Projects />
        <TechStack />
        </div>
    </div>
  );
}

export default App;
