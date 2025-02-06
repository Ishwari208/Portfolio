import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Nav } from "react-bootstrap";


function Home() {
  return (
    <>
    <Navbar />
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <div style={styles.content}>
           
          <h1 style={styles.heading}>Hello, I'm Ishwari!</h1>
          <p style={styles.paragraph}>
            I'm a <span style={styles.highlight}>Third-Year Undergraduate</span> with a passion for
            <span style={styles.highlight}> UI Design, React, and Web Basics</span>.
          </p>
          <p style={styles.paragraph}>
            I specialize in creating clean, interactive, and user-friendly web
            interfaces.
          </p>
          <Link to="/about">
            <button style={styles.button}>Learn More</button>
          </Link>
        </div>
        <div style={styles.image}>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGEeqM8SCboIw/profile-displayphoto-shrink_400_400/B56ZPdkWuJG8Ag-/0/1734589124532?e=1744243200&v=beta&t=-tU7mXOLYj5CUqpbNcA0FFYD8oYW-e-Ieqz1wLfbQTk" alt="Ishwari" style={styles.imageStyle} />
        </div>
      </div>

      <div style={styles.skills}>
        <h2 style={styles.skillsHeading}>Skills & Expertise</h2>
        <ul style={styles.skillsList}>
          <li style={styles.skillsItem}>UI/UX Design</li>
          <li style={styles.skillsItem}>React & JavaScript</li>
          <li style={styles.skillsItem}>HTML & CSS</li>
          <li style={styles.skillsItem}>Web Development</li>
        </ul>
      </div>
    </div>
    </>
  );
}

const styles = {
  container: {
    padding: '50px',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#f7f7f7',
    color: '#333',
  },
  heroSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  content: {
    maxWidth: '600px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '600',
    color: '#4A90E2',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
  },
  highlight: {
    color: '#4A90E2',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#4A90E2',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#357ABD',
  },
  image: {
    textAlign: 'center',
  },
  imageStyle: {
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    objectFit: 'cover',
  },
  skills: {
    marginTop: '50px',
    textAlign: 'center',
  },
  skillsHeading: {
    fontSize: '2rem',
    color: '#4A90E2',
    fontFamily: "'Poppins', sans-serif",
  },
  skillsList: {
    listStyleType: 'none',
    padding: 0,
  },
  skillsItem: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
};
export default Home;
