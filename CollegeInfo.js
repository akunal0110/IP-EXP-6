import React from 'react';

const CollegeInfo = () => {
    return (
        <div style={styles.container}>
            <h2>About VESIT</h2>
            <p>
                VESIT (Vivekanand Education Society Institute of Technology) is a renowned engineering institute in Mumbai.
                Established in 1984, VESIT has been dedicated to providing world-class education and empowering students in the field of engineering and technology.
            </p>
            <p>
                Our college offers undergraduate and postgraduate programs in disciplines such as Computer Science, Electronics, and Technology Management. 
                With state-of-the-art facilities and experienced faculty, VESIT is a preferred choice for aspiring engineers.
            </p>
            <h3>Courses Offered:</h3>
            <ul>
                <li>B.Tech in Computer Science</li>
                <li>B.Tech in Electronics and Communication</li>
                <li>MBA in Technology Management</li>
                <li>M.Tech in Data Science</li>
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

export default CollegeInfo;
