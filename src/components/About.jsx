import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { figma, javascript, reactjs, mongodb, nodejs, framer } from "../assets";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p ref={paragraphRef} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm Talha, a Senior Full-Stack Developer with <span className="text-white font-semibold">6+ years of experience</span> and <span className="text-white font-semibold">20+ products delivered</span>. I craft scalable, user-focused web applications that blend cutting-edge frontend with powerful backend solutions.
        <br /><br />
        My tech stack: <span className="text-white">React, Next.js, Nest.js, Node.js, Python, MongoDB, Postgres</span> plus deep expertise in <span className="text-white">AWS cloud infrastructure (EC2, RDS, EKS, ECS)</span>, <span className="text-white">microservices architecture</span>, Docker, CI/CD, and API integrations. I also build <span className="text-white font-semibold">AI agents that automate business workflows</span>, saving time and boosting efficiency.
        <br /><br />
        From startups to leading brands, I've delivered custom features and seamless integrations that drive real business impact. Let's build something exceptional together!
      </p>


      {/* Skillset Section */}
      <div className="mt-10">
        <div>
          <h3 className="text-white text-[26px] font-bold">Skillset</h3>
          <p className="uppercase text-secondary text-[14px] mt-1">What I got</p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {[{
            name: 'UI/UX', percent: 92, icon: figma
          }, {
            name: 'Javascript', percent: 80, icon: javascript
          }, {
            name: 'React, Vue, Angular', percent: 85, icon: reactjs
          }, {
            name: 'MongoDB,Sql', percent: 99, icon: mongodb
          }, {
            name: 'Node, Nest, Express', percent: 89, icon: nodejs
          }, {
            name: 'API Integrations', percent: 93, icon: framer
          }].map((skill, idx) => (
            <div key={idx} className="bg-tertiary rounded-xl p-5 w-[180px] flex flex-col items-center gap-3">
              <div className="w-12 h-12">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <div className="text-white text-[20px] font-semibold">{skill.percent}%</div>
              <p className="text-secondary text-center text-[14px]">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
