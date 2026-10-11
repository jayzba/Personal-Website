import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bwmap, worldmap } from '../assets';
import jayPic from '../assets/personal/Jay.jpg';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-full">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-full">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section id="home" className="relative w-full h-screen mx-auto bg-white/80 overflow-hidden flex items-center z-10">
        <div className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex sm:flex-row flex-col-reverse items-center justify-center gap-10 sm:gap-16 lg:gap-40 z-20`}>

          <div className="flex flex-col justify-center">
            <h1
              className={`${styles.heroHeadText} text-accentPurple font-poppins uppercase`}>
              Hi, <br />
              I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-accentPurple text-[50px] font-poppins
                font-extrabold uppercase leading-none">
                Jay
              </span>
            </h1>

            <div className="mt-2 flex flex-col gap-2">
              <p className="text-accentPurple font-extrabold uppercase lg:text-[35px] sm:text-[32px] xs:text-[24px] text-[20px] tracking-wide">
                Software Engineer
              </p>
              <p className="text-accentPurple font-poppins font-bold uppercase lg:text-[13px] sm:text-[18px] xs:text-[16px] text-[14px] opacity-80 tracking-widest">
                Solving Problems | Embracing Challenges | Driving Impact
              </p>
            </div>

            <div className="mt-5 flex gap-5 items-center pointer-events-auto">
              <a href="https://linkedin.com/in/zhuohaozhang" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex justify-center items-center bg-[#0077b5] text-white hover:bg-[#005582] transition-colors shadow-sm">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
              </a>
              <a href="https://github.com/jayzba" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex justify-center items-center bg-accentPurple text-white hover:bg-battleGray transition-colors shadow-sm">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </a>
              <a href="mailto:zjzcareer@gmail.com" className=" w-10 h-10 rounded-full flex justify-center items-center bg-[#ea4335] text-white hover:bg-[#d33426] transition-colors shadow-sm">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
              </a>
            </div>
          </div>

          {/* Circular area for your picture */}
          <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-[6px] border-french shadow-2xl flex items-center justify-center bg-white shrink-0">
            <img src={jayPic} alt="Jay" className="w-full h-full object-cover object-[center_15%]" />
          </div>

        </div>
      </section >
    </>
  );
};

export default Hero;
