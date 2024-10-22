import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.logo}>VESIT</h1>
            <nav>
                <Link style={styles.link} to="/">Home</Link>
                <Link style={styles.link} to="/profile">Profile</Link>
                <Link style={styles.link} to="/college-info">College Info</Link>
                <Link style={styles.link} to="/contact">Get in Touch</Link>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#4CAF50',
        padding: '1em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: { color: 'white', fontSize: '1.5em' },
    link: { color: 'white', marginRight: '15px', textDecoration: 'none' }
};

export default Header;
