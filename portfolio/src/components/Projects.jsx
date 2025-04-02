import '../index.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Task Master', 
      img: 'https://fliplet.com/wp-content/uploads/2024/02/fliplet_task_management_image.webp', 
      description: 'A task management platform for leaders and their teams. Streamline collaboration, and achieve your goals together.', 
      tech:'TECH: NextJS, MongoDB',
      goto: 'https://github.com/dheerajdrse7en',
    },
    { 
      id: 2, 
      title: 'Ride-Sharing App', 
      img: 'https://shyamfuture.com/wp-content/uploads/2024/07/ride-sharing-app-development-company-.jpg', 
      description: 'Built a feature-rich ride-sharing app with real-time GPS tracking and multiple ride options and implemented secure ride tracking.', 
      tech:'TECH: Flutter, Firebase',
      goto: 'https://github.com/dheerajdrse7en',
    },
    { 
      id: 3, 
      title: 'Expense Tracker', 
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2a8ac65608331.5afa862ca7e21.png', 
      description: 'Users can create an account, manage expenses and income, view charts, and update or remove financial details.', 
      tech:'TECH: MERN Stack',
      goto: 'https://github.com/dheerajdrse7en',
    },
    { id: 4, 
      title: 'Scientific Calculator', 
      img:'https://copyassignment.com/wp-content/uploads/2022/11/calc_res.jpg', 
      description: 'This is a basic scientific calculator created in Java and Java Swing for making Graphical User Interface (GUI).', 
      tech:'TECH: JAVA',
      goto: 'https://github.com/dheerajdrse7en',
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <Carousel responsive={responsive}>
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <img src={project.img}/>
            <p>{project.description}</p>
            <div className='project-footer'>
              <p>{project.tech}</p>
              <a href={project.goto}>Code</a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
