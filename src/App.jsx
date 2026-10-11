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

        {/* Previous sizing: <div className="bg-bgLight1 pb-10 pt-10"> */}
        <div className="bg-bgLight1 w-full h-screen flex items-center justify-center relative">
          <About />
        </div>

        {/* Previous sizing: <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10"> */}
        <div className="bg-tech bg-cover bg-center bg-no-repeat w-full h-screen flex items-center justify-center relative">
          <Tech />
        </div>

        {/* Previous sizing: <div className="bg-bgLight2 pb-10 pt-10"> */}
        <div className="bg-bgLight2 w-full h-screen flex items-center justify-center relative">
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
        {/* Previous sizing: <div className="relative z-0 bg-bgLight1 pt-10 pb-10"> */}
        <div className="relative z-0 bg-bgLight1 w-full h-screen flex items-center justify-center">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
