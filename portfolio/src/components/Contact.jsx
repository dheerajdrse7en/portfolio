import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';
import resume from '../assets/Resume.pdf';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', rating: 0 });

  useEffect(() => {
    emailjs.init('q81MWoGlRjpRST9eK');
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (rating) => {
    setForm({ ...form, rating });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const params = {
      name: form.name,
      email: form.email,
      message: [form.message, form.rating]
    };

    const serviceId = "service_vh016fz";
    const templateId = "template_134dg6f";
    emailjs.send(serviceId, templateId, params).then(() => {
      alert("Thanks for submitting a response");
      setForm({ name: '', email: '', message: '', rating: 0 });
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="sidebar">
          <div className='mail'>
            <a href={resume}><button>Download CV📩</button></a>
          </div>
          <div className="reach">
            <h1>Reach ME ⬇️</h1>
            <div className="reach-footer">
              <a href="https://www.linkedin.com/in/dheerajdrse7en/"><img src="https://img.icons8.com/bubbles/500/linkedin.png" alt="linkedin" /></a>
              <a href="https://github.com/dheerajdrse7en"><img src="https://img.icons8.com/bubbles/500/github.png" alt="github" /></a>
            </div>
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <div className='submit-container'>
            <div className="rating-box">
              <div className="rating-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= form.rating ? 'filled' : ''}`}
                    onClick={() => handleRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <button type="submit" className="submit-button">
              Send
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
