import '../index.css'; // Ensure styles are applied

const certificates = [
  {
    id: 1,
    title: 'Google Cloud Associate',
    image: 'https://via.placeholder.com/300', // Replace with actual certificate image URL
    description: 'Completed the Google Cloud Associate Engineer certification.',
    link: 'https://www.credential.net/example'
  },
  {
    id: 2,
    title: 'AWS Certified Solutions Architect',
    image: 'https://via.placeholder.com/300',
    description: 'Earned AWS Certified Solutions Architect – Associate certification.',
    link: 'https://www.credly.com/example'
  },
  {
    id: 3,
    title: 'React Developer Certification',
    image: 'https://via.placeholder.com/300',
    description: 'Certified React Developer from Meta.',
    link: 'https://www.udacity.com/example'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <h2>My Certifications</h2>
      <div className="certificates-container">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-certificate">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
