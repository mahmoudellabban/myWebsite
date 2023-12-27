import React, { useEffect, useRef } from 'react';
import './skills.css';

const skillsData = [
  { name: 'HTML', progress: 95 },
  { name: 'CSS', progress: 85 },
  { name: 'JavaScript', progress: 80 },
  { name: 'TypeScript', progress: 85 },
  { name: 'React', progress: 90 },
  { name: 'Redux', progress: 85 },
  { name: 'Bootstrap', progress: 90 },
  { name: 'Tailwind', progress: 85 },
  { name: 'Material Ui', progress: 90 },
  { name: 'Version Control (GIT) ', progress: 90 },  
];

const SkillsSection = () => {
  const skillsRef = useRef(null);
  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            progressRefs.current.forEach((ref, index) => {
              const { progress } = skillsData[index];
              ref.style.width = `${progress}%`;
              ref.innerHTML = `${progress}%`;
            });
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    observer.observe(skillsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="skills-section" id='skills' ref={skillsRef}>
      <div className="intro">
        <h2>Skills</h2>
        <p>As a front-end developer, I possess a diverse skill set that allows me to build visually appealing, dynamic, responsive and interactive user interfaces. I'm always staying updated with emerging technologies, and I'm always eager to learn and adapt to new tools and frameworks to deliver high-quality front-end solutions.
</p>
      </div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar">
              <div
                className="progress"
                ref={(el) => (progressRefs.current[index] = el)}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;