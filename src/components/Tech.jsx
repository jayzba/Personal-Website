import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technology & Tools</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-accentGreen text-[18px] max-w-3xl leading-[30px]">
        I am a Software Developer focused on building clean, responsive, and reliable web applications. My work centers around full-stack development, seamless API integrations, and intuitive user interfaces, with an emphasis on writing maintainable code that solves practical problems. I enjoy taking ideas from initial concept to a polished, working product.
        <br /><br />
        Great software isn't just about code—it’s built through clear communication, collaboration, and continuous learning. Whether building independently or working alongside a team, I approach projects with ownership, adaptability, and an eagerness to pick up new tools as challenges evolve. Below is a snapshot of the core technologies and tools I've actively used to bring my projects to life.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center relative group cursor-pointer">
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>

            {/* Hover Tooltip */}
            <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform translate-y-1 group-hover:translate-y-0 z-20">
              <span className="bg-accentPurple text-bgLight3 text-[13px] font-medium font-poppins px-3 py-1 rounded-full shadow-lg whitespace-nowrap tracking-wider">
                {technology.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'skills');
