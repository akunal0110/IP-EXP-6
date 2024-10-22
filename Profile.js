import React from 'react';

const Profile = () => {
    return (
        <div style={styles.container}>
            <h2>Kunal Punjabi</h2>
            <p>
                Hello! My name is Kunal Punjabi, a passionate student pursuing a Bachelor's degree in Computer Science at VESIT. 
                I am always looking for opportunities to learn and grow in the field of technology and innovation.
            </p>
            <h3>Skills</h3>
            <ul>
                <li>Programming Languages: JavaScript, Python, C++</li>
                <li>Web Development: React, Node.js, HTML, CSS</li>
                <li>Database Management: MySQL, MongoDB</li>
                <li>Cloud Computing: AWS, Azure</li>
            </ul>
            <h3>Achievements</h3>
            <ul>
                <li>Top performer in the inter-college coding competition</li>
                <li>Developed a student portal project using React and Node.js</li>
                <li>Completed a summer internship at ABC Technologies</li>
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '2em',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '2em auto',
        textAlign: 'left',
    }
};

export default Profile;
