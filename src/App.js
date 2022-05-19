import './App.css';
import { Experience } from './component/Experience/Experience';
import { Introduce } from './component/Introduce/Introduce';
import { Navbar } from './component/Navbar/Navbar';
import { Portfolio } from './component/Portfolio/Portfolio';
import { Services } from './component/Services/Services';
import { Works } from './component/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduce />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
    </div>
  );
}

export default App;
