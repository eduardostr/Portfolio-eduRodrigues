import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Global.css';
import AboutMe from './components/AboutMe';
import Certificates from './components/Certificates';
import Me from './components/Me';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SendEmail from './components/SendEmail/SendEmail';

function App() {
  return (
    <Router>
      <main className="main">
        <Routes>
          <Route path="/" element={<>
            <NavBar />
            <Me />
            <AboutMe />
            <Projects />
            <Skills />
            <Certificates />
            <SendEmail />
          </>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;