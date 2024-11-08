import React from 'react';
import LoopText from './LoopText';
import lineIcon from '../images/line.png';
import instagramIcon from '../images/instagram.png';
import githubIcon from '../images/github.png';
import facebookIcon from '../images/facebook.png';
import './SkillBar.css';
import educationImage from '../images/education.png';
import nextIcon from '../images/Next.png';



const Page = ({ id, hasCanvas }) => {
  return (
    <div id={id}>
      {hasCanvas && <LoopText />} 

      {id === "page1" && (
        <>
          <div id="right-text">
            <h3>ABOUTS ME</h3>
            <h1>
              I am a final-year student
              <br />
              interested in network-related work
              <br />
              work aiming to apply my skills 
              <br />
              in network management and 
              <br />
              system development to enhance
              <br />
              security and stability.
            </h1>
          </div>
          <div id="left-text">
            <h1>
              <br />
              <br />
              I seek an internship to gain 
              <br />
              experience and prepare for 
              <br />
              future career opportunities.
            </h1>
            <h3>-Panupong Prawong-</h3>
          </div>
        </>
      )}

{id === "page2" && (
  <div id="text2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', textAlign: 'left', paddingLeft: '0%',marginLeft: '-40px' }}>
    <h3>STUDENT</h3>
    <h1>EDUCATION</h1>
    <img src={educationImage} alt="Education" style={{ width: '45%', height: 'auto', marginTop: '-100px', marginLeft: '-80px', zIndex: 10 }} />
  </div>
)}




      {id === "page3" && (
        <section id="text3" className="page3-skills">
          <h3>MY SKILLS</h3>
          <h1>MY SKILLS</h1>

          <div className="skills-container">
            <div className="skills left-skills">
              {[
                { name: 'HTML', percentage: '90%' },
                { name: 'CSS', percentage: '80%' },
                { name: 'JavaScript', percentage: '60%' },
                { name: 'Dart', percentage: '95%' }
              ].map(skill => (
                <div className="skill" key={skill.name}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-percentage" per={skill.percentage} style={{ maxWidth: skill.percentage }}></div>
                  </div>
                </div>
              ))}
            </div>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>


            <div className="skills right-skills">
              {[
                { name: 'React', percentage: '75%' },
                { name: 'Node.js', percentage: '70%' },
                { name: 'Python', percentage: '85%' }
              ].map(skill => (
                <div className="skill" key={skill.name}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-percentage" per={skill.percentage} style={{ maxWidth: skill.percentage }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

{id === "page4" && (
    <div id="text4" style={{ position: 'absolute', top: '40%', left: '10%', textAlign: 'left' }}>
        <h3>CONTACT</h3>
        <h1>MY CONTACT</h1>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <a href="https://line.me/ti/p/L0gIiiPDDh" target="_blank" rel="noopener noreferrer">
                <img src={lineIcon} alt="Line" style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
            </a>
            <a href="https://github.com/tinepanupong1" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
            </a>
            <a href="https://www.instagram.com/sadboy.tz/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100003641022647" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
            </a>
        </div>

        {/* ปุ่ม Next */}
        <a href="https://drive.google.com/file/d/1XDgSYw1zpf51ksLPd56lLF8nr-g3evGp/view?usp=drive_link" style={{ position: 'absolute', up: '-10px', right: '-30px', cursor: 'pointer' }}>
            <img src={nextIcon} alt="Next" style={{ width: '200px', height: '200px' }} />
        </a>
    </div>
)}
    </div>
  );
};

export default Page;
