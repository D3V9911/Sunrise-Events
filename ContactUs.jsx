import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eventDate: '',
    description: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.subText}>
        We would love to hear from you! To get started planning your wedding or event,
        please fill out the below form or email us at
        <strong> chelsea@brillianteventplanning.com</strong>.
      </p>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label htmlFor="firstName" style={styles.label}>First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="lastName" style={styles.label}>Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter" style={styles.checkboxLabel}>
              Sign up for news and updates
            </label>
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
        <div style={styles.infoContainer}>
          <h2 style={styles.infoHeader}> </h2>
          <p style={styles.infoText}></p>
          <p style={styles.infoText}></p>
          <p style={styles.infoText}>
            
          </p>
          <p style={styles.note}>*By appointment only</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: 'auto',
    padding: '20px',
    color: '#1a202c',
  },
  header: {
    fontSize: '2.5em',
    marginBottom: '10px',
  },
  subText: {
    fontSize: '1.1em',
    marginBottom: '20px',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
  },
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputGroup: {
    marginBottom: '15px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1em',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  checkboxLabel: {
    marginLeft: '5px',
    fontSize: '0.9em',
  },
  button: {
    padding: '10px',
    fontSize: '1.1em',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    marginTop: '10px',
  },
  infoContainer: {
    flex: 1,
    textAlign: 'left',
  },
  infoHeader: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#b71c1c',
  },
  infoText: {
    fontSize: '1em',
    margin: '5px 0',
  },
  note: {
    fontSize: '0.9em',
    fontStyle: 'italic',
  },
};

export default Contact;
