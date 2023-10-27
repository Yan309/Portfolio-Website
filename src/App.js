import './App.css';
import { Banner } from './components/Banner';
import ContactMe from './components/ContactMe';
import { Footer } from './components/Footer';
import {NavBar} from './components/Navbar';
import { Projects } from './components/Projects';
import{Skills} from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='avatar'>
    <NavBar></NavBar>
    <Banner></Banner>
    <Skills></Skills>
    <Projects></Projects>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </div>
  );
}

export default App;
