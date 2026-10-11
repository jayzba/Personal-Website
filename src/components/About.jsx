import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-2xl">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-bgLight2 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain brightness-[0.2]" />
        <h3 className="text-accentGreen text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-accentGreen text-[18px] max-w-3xl leading-[30px]">
        I'm a graduate from UT Dallas who believes the best technology disappears into great experiences. My approach is simple: understand deeply, build iteratively, and never stop learning. Whether I'm designing full-stack applications or solving complex problems, I'm obsessed with the details that make a product feel effortless to use. I am constantly expanding my skillset through hands-on projects, team collaborations, and real-world problem-solving.
        <br /><br />
        I thrive in collaborative environments where ideas flow freely and diverse perspectives push solutions further. I always bring curiosity, drive, and a growth-oriented mentality to my work. When I'm away from the keyboard, you can usually find me playing basketball, watching TV, or unwinding with video games. Ultimately, I'm looking for opportunities where I can contribute meaningfully and build software that genuinely improves people's lives.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
