import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // send to server 
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // reset  
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="contacts-container">
      <div className="row">
        <div className="col-lg-6 mb-5">
          <h2 className="mb-4">Contact Us</h2>
          
          {formSubmitted ? (
            <div className="alert alert-success">
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          )}
        </div>
        
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Store Location</h3>
              <p className="card-text">
                <strong>Address:</strong><br />
                123 Tech Street<br />
                Shibuya City, Tokyo<br />
                Japan, 150-0002
              </p>
              <p className="card-text">
                <strong>Hours:</strong><br />
                Monday - Friday: 9:00 AM - 8:00 PM<br />
                Saturday: 10:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Contact Info</h3>
              <p className="card-text">
                <strong>Customer Support:</strong><br />
                Phone: (000) 123-4567<br />
                Email: support@techhub.com
              </p>
              <p className="card-text">
                <strong>Sales Department:</strong><br />
                Phone: (000) 765-4321<br />
                Email: sales@techhub.com
              </p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Connect With Us</h3>
              <div className="social-icons d-flex gap-3 fs-3">
                <a href="#" className="text-primary"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-info"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-danger"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-dark"><i className="bi bi-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts