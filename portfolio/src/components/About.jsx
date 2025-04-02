import '../index.css';
import myImg from '../assets/dp-img.png';
import Draggable from 'react-draggable';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
      <Draggable>
        <div className="about-image">
          <img src={myImg} alt="About" />
        </div>
      </Draggable>
        
        <div className="about-text">
          <h2>About Me</h2>
          <p>🎓 Hi, I am a B.Tech. student in Computer Science and Engineering at VIT Chennai.
            I enjoy working with both hardware and software, and I have experience in Python,
            Java, and full-stack development, especially.<br/>
            🛠️ Recently, I have started exploring Flutter, and I am excited to dive deeper into 
            it. I am always looking for new opportunities to apply what I have learned, solve
            real-world problems, and grow professionally.<br/>
            ⚡ Feel free to connect with me if you share similar interests or know of 
            opportunities where I can contribute!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
