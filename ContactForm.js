import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={styles.container}>
            <h2>Get in Touch</h2>
            {!submitted ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input 
                        type="text" 
                        name="fullName" 
                        placeholder="Full Name" 
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input 
                        type="tel" 
                        name="contactNumber" 
                        placeholder="Contact Number" 
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Submit</button>
                </form>
            ) : (
                <p>Thank you for getting in touch! We will get back to you soon.</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '2em',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '2em auto',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '1em',
        padding: '0.8em',
        fontSize: '1em',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '0.8em 1.2em',
        cursor: 'pointer',
        fontSize: '1em',
    }
};

export default ContactForm;
