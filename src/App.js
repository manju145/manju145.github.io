import NavBar from './Components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import SocialLink from './pages/socialLinks';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Project from './pages/Project';
import "./App.css";


function App() {
  return (
    <div className="App">
   <NavBar></NavBar>
   <Home/>
<About/>
<Project/>
<Skill/>
<Contact/>


   <SocialLink/>
    </div>
  );
}

export default App;
