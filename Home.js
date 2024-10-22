import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/college-info');
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={styles.hero}>
                <img src="/images/vesit-logo.png" alt="VESIT Logo" style={styles.logo} />
                <h1>Welcome to VESIT</h1>
                <p>Building Future Leaders with Excellence in Technology and Innovation</p>
                <button style={styles.ctaButton} onClick={handleExploreClick}>Explore Now</button>
            </section>

            {/* About Section */}
            <section style={styles.about}>
                <h2>About VESIT</h2>
                <p>Vivekanand Education Society's Institute of Technology is one of Mumbai's premier educational institutes, offering undergraduate and postgraduate programs in engineering and technology.</p>
            </section>

            {/* Courses Section */}
            <section style={styles.courses}>
                <h2>Our Programs</h2>
                <div style={styles.courseList}>
                    <div style={styles.courseItem}>
                        <img src="/images/computer-science.jpg" alt="B.Tech Computer Science" style={styles.courseImage} />
                        <h3>B.Tech Computer Science</h3>
                        <p>Master the latest technologies and innovations in the field of computer science.</p>
                    </div>
                    <div style={styles.courseItem}>
                        <img src="/images/electronics.jpg" alt="B.Tech Electronics" style={styles.courseImage} />
                        <h3>B.Tech Electronics</h3>
                        <p>Get hands-on experience in the world of electronics and communication.</p>
                    </div>
                    <div style={styles.courseItem}>
                        <img src="/images/mba-tech-management.jpg" alt="MBA in Technology Management" style={styles.courseImage} />
                        <h3>MBA in Technology Management</h3>
                        <p>Lead the future with our specialized MBA program in technology management.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={styles.testimonials}>
                <h2>Student Testimonials</h2>
                <div style={styles.testimonialList}>
                    <div style={styles.testimonialItem}>
                        <p>"VESIT gave me a platform to excel in both academics and extracurricular activities."</p>
                        <strong>- Kunal Punjabi</strong>
                    </div>
                    <div style={styles.testimonialItem}>
                        <p>"The faculties at VESIT are highly supportive and knowledgeable."</p>
                        <strong>- Sarah</strong>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section style={styles.gallery}>
                <h2>Our Campus Gallery</h2>
                <div style={styles.imageGrid}>
                    <img src="/images/campus1.jpg" alt="Campus 1" style={styles.image}/>
                    <img src="/images/campus2.jpg" alt="Campus 2" style={styles.image}/>
                    <img src="/images/event1.jpg" alt="Event 1" style={styles.image}/>
                    <img src="/images/event2.jpg" alt="Event 2" style={styles.image}/>
                </div>
            </section>

            {/* Contact Section */}
            <section style={styles.contact}>
                <h2>Contact Us</h2>
                <p>Email: vesitcontact@ves.ac.in</p>
                <button style={styles.ctaButton} onClick={() => navigate('/contact')}>Get in Touch</button>
            </section>
        </div>
    );
};

const styles = {
    hero: {
        backgroundColor: '#4CAF50', // Hero section background color
        color: 'white',
        textAlign: 'center',
        padding: '5em 1em',
    },
    logo: {
        width: '150px', // Logo width
        height: 'auto',
        marginBottom: '20px', // Space below the logo
    },
    ctaButton: {
        backgroundColor: '#fff',
        color: '#4CAF50',
        border: 'none',
        padding: '0.8em 1.2em',
        cursor: 'pointer',
        fontSize: '1em',
        marginTop: '1em',
    },
    about: {
        padding: '2em',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
    },
    courses: {
        padding: '2em',
        textAlign: 'center',
    },
    courseList: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    courseItem: {
        backgroundColor: '#e0e0e0',
        padding: '1em',
        borderRadius: '8px',
        width: '30%',
        margin: '1em',
    },
    courseImage: {
        width: '100%',
        height: '200px',
        borderRadius: '8px',
        objectFit: 'cover',
    },
    testimonials: {
        padding: '2em',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    testimonialList: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    testimonialItem: {
        backgroundColor: '#f4f4f4',
        padding: '1em',
        borderRadius: '8px',
        width: '40%',
    },
    gallery: {
        padding: '2em',
        textAlign: 'center',
    },
    imageGrid: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    image: {
        width: '150px',
        height: '150px',
        borderRadius: '8px',
    },
    contact: {
        padding: '2em',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
    }
};

export default Home;
