import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import {
  figma,
  javascript,
  reactjs,
  typescript,
  git,
  nodejs,
  express,
  mongodb,
  mysql,
  postgresql,
  aws,
  docker,
} from "../assets";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      // icon={
      //   <div className='flex justify-center items-center w-full h-full'>
      //     <img
      //       src={experience.icon}
      //       alt={experience.company_name}
      //       className='w-[90%] h-[90%] object-contain'
      //     />
      //   </div>
      // }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Technologies Section */}
      <div className='mt-16'>
        <h3 className='text-white text-[26px] font-bold text-center'>Technologies</h3>
        <p className='text-secondary uppercase text-[12px] text-center mt-1'>From the provided stack</p>

        <div className='mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5'>
          {[ 
            { name: 'UI/UX', icon: figma },
            { name: 'Javascript', icon: javascript },
            { name: 'React', icon: reactjs },
            { name: 'Vue' },
            { name: 'Angular' },
            { name: 'Typescript', icon: typescript },
            { name: 'Git', icon: git },
            { name: 'Node.js', icon: nodejs },
            { name: 'Python' },
            { name: 'Express.js', icon: express },
            { name: 'MongoDB', icon: mongodb },
            { name: 'MySQL', icon: mysql },
            { name: 'PostgreSQL', icon: postgresql },
            { name: 'API Integrations' },
            { name: 'Authentication & Security' },
            { name: 'DevOps (Docker)', icon: docker },
            { name: 'Cloud (AWS)', icon: aws },
            { name: 'Testing & Debugging' },
            { name: 'Agile Development' },
          ].map((tech, idx) => (
            <div key={idx} className='bg-tertiary rounded-xl p-4 flex flex-col items-center justify-center gap-3 min-h-[130px]'>
              {tech.icon ? (
                <img src={tech.icon} alt={tech.name} className='w-12 h-12 object-contain' />
              ) : (
                <div className='px-3 py-1 rounded-full bg-black-100 text-secondary text-[12px]'>
                  {tech.name}
                </div>
              )}
              <p className='text-white text-[13px] text-center'>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
