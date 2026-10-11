import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const cardVariants = (index) => {
  const baseDelay = 0.25;
  const stagger = 0.35;
  const cardDelay = baseDelay + index * stagger;

  return {
    hidden: {
      x: -80,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 18,
        mass: 0.8,
        delay: cardDelay,
        opacity: {
          duration: 0.8,
          ease: 'easeOut',
          delay: cardDelay + 0.15,
        },
      },
    },
  };
};

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={cardVariants(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative ${active === id
          ? 'lg:flex-[3.5] flex-[10] h-[460px] sm:h-[480px] lg:h-[420px]'
          : 'lg:flex-[0.5] flex-[2] h-[130px] sm:h-[150px] lg:h-[420px]'
        } flex items-center justify-center min-w-[170px] w-full cursor-pointer card-shadow overflow-hidden rounded-[24px]`}
      style={{ transition: 'flex 0.7s ease-in-out, height 0.7s ease-in-out' }}
      onClick={() => handleClick(active === id ? '' : id)}
      onMouseEnter={() => {
        if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
          handleClick(id);
        }
      }}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover"
      />

      {/* Inactive Title */}
      <div
        className={`absolute inset-0 flex items-center justify-between p-6 sm:p-8 transition-opacity duration-[0.3s] ease-in-out ${active !== id ? 'opacity-100 delay-[0.4s] z-20' : 'opacity-0 z-0 pointer-events-none'
          }`}>
        <h3
          className="font-extrabold font-beckman uppercase whitespace-nowrap sm:text-[27px] text-[20px] text-bgLight3 tracking-[1px]
          text-left lg:absolute lg:bottom-8 lg:left-[calc(100%-1.75rem)] lg:rotate-[-90deg] lg:origin-bottom-left
          leading-none drop-shadow-md">
          {name}
        </h3>
        <span className="lg:hidden text-bgLight3 text-[12px] font-poppins font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
          Tap to view
        </span>
      </div>

      {/* Active Content */}
      <div
        className={`absolute bottom-0 p-6 sm:p-8 justify-start w-full 
        flex-col bg-[rgba(231,227,237,0.92)] z-20 transition-opacity duration-[0.3s] ease-in-out ${active === id ? 'opacity-100 delay-[0.4s]' : 'opacity-0 pointer-events-none'
          }`}>
        <div className="absolute top-4 right-4 flex justify-end">
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(repo, '_blank');
            }}
            className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
              flex justify-center items-center cursor-pointer
              sm:opacity-[0.9] opacity-[0.8] hover:bg-taupe transition-colors shadow-md">
            <img
              src={github}
              alt="source code"
              className="w-4/5 h-4/5 object-contain"
            />
          </div>
        </div>

        <h2
          className="font-bold sm:text-[32px] text-[24px] 
          text-accentPurple uppercase font-beckman sm:mt-0 mt-0 pr-12 text-left">
          {name}
        </h2>
        <p
          className="text-accentGreen sm:text-[14px] text-[13px] 
          max-w-3xl sm:leading-[24px] leading-[20px] mt-2
          font-poppins tracking-[0.5px] font-medium text-left">
          {description}
        </p>
        <button
          className="live-demo flex justify-between 
          sm:text-[16px] text-[14px] text-accentPurple 
          font-bold font-beckman items-center py-5 pl-2 pr-3 
          whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
          w-[125px] h-[46px] rounded-[10px] bg-bgLight1 
          sm:mt-[22px] mt-[16px] hover:bg-accentGreen 
          hover:text-white transition duration-[0.2s] 
          ease-in-out shadow-sm"
          onClick={(e) => {
            e.stopPropagation();
            window.open(demo, '_blank');
          }}
          onMouseOver={(e) => {
            e.currentTarget.querySelector('.btn-icon').setAttribute('src', pineappleHover);
          }}
          onMouseOut={(e) => {
            e.currentTarget.querySelector('.btn-icon').setAttribute('src', pineapple);
          }}>
          <img
            src={pineapple}
            alt="pineapple"
            className="btn-icon sm:w-[34px] sm:h-[34px] 
              w-[30px] h-[30px] object-contain brightness-[0.2]"
          />
          LIVE DEMO
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('');

  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-accentGreen text-[18px] max-w-3xl leading-[30px]">
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div
          className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5"
          onMouseLeave={() => setActive('')}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
