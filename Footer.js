import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2024 VESIT (Vivekanand Education Society Institute of Technology). All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#4CAF50',
        color: 'white',
        textAlign: 'center',
        padding: '1em',
        position: 'relative',
        bottom: 0,
        width: '100%',
    }
};

export default Footer;
