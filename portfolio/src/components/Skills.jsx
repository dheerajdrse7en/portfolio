import { useState } from 'react';
import '../index.css';

const Skills = () => {
  const [active, setActive] = useState('languages');

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-tabs">
        <button onClick={() => setActive('languages')}>LANGUAGES</button>
        <button onClick={() => setActive('frontend')}>FRONTEND</button>
        <button onClick={() => setActive('backend')}>BACKEND</button>
        <button onClick={() => setActive('tools')}>TOOLS</button>
      </div>
      <div className={`skills-content ${active === 'languages' ? 'active' : ''}`}>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/python--v1.png" alt="python" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/java-coffee-cup-logo--v1.png" alt="java" />
          <p>Java</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/c-programming.png" alt="c" />
          <p>C</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/c-plus-plus-logo.png" alt="c++" />
          <p>C++</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/dart.png" alt="dart" />
          <p>Dart</p>
        </div>
      </div>
      <div className={`skills-content ${active === 'frontend' ? 'active' : ''}`}>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/html-5--v1.png" alt="html5" />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/css3.png" alt="css3" />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/javascript--v1.png" alt="javascript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/typescript.png" alt="typescript" />
          <p>TypeScript</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/office/500/react.png" alt="react-js"/>
          <p>ReactJS</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/nextjs.png" alt="next-js"/>
          <p>NextJS</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/fluency/500/tailwind_css.png" alt="tailwind-css"/>
          <p>Tailwind CSS</p>
        </div>
      </div>
      <div className={`skills-content ${active === 'backend' ? 'active' : ''}`}>
        <div className="skill-item">
          <img src="https://img.icons8.com/fluency/500/node-js.png" alt="node-js" />
          <p>NodeJS</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/fluency/500/express-js.png" alt="express-js" />
          <p>ExpressJS</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/mongodb.png" alt="mongodb" />
          <p>MongoDB</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/mysql-logo.png" alt="mysql" />
          <p>MySQL</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/firebase.png" alt="firebase"/>
          <p>Firebase</p>
        </div>
      </div>
      <div className={`skills-content ${active === 'tools' ? 'active' : ''}`}>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/visual-studio-code-2019.png" alt="vs-code" />
          <p>VS Code</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/git.png" alt="git" />
          <p>Git</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/48/flutter.png" alt="flutter" />
          <p>Flutter</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
