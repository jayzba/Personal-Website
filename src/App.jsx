import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-bgLight1 pb-10 pt-10">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat py-14 sm:py-20">
          <Tech />
        </div>

        <div className="bg-bgLight2 py-14 sm:py-20">
          <Projects />
        </div>

        {/*
        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        */}
        <div className="relative z-0 bg-bgLight1 pt-10 pb-10">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
