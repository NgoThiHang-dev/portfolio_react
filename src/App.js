import { useContext } from 'react';
import './App.css';
import { Contact } from './component/Contact/Contact';
import { Experience } from './component/Experience/Experience';
import { Footer } from './component/Footer/Footer';
import { Introduce } from './component/Introduce/Introduce';
import { Navbar } from './component/Navbar/Navbar';
import { Portfolio } from './component/Portfolio/Portfolio';
import { Services } from './component/Services/Services';
import { Testimonial } from './component/Testimonial/Testimonial';
import { Works } from './component/Works/Works';
import { themeContext } from './context/ContextTheme'

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="App" style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
        <Navbar />
        <Introduce />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>

  );
}

export default App;
