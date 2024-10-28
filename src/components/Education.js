import React from 'react';
import { Container } from 'react-bootstrap';

export const Education = () => {
    const educationDetails = [
        {
            institution: "MCT's Rajiv Gandhi Institute of Technology",
            year: "2020 - 2024",
            degree: "Bachelor of Engineering in Information Technology",
            grade: "CGPA: 9.01",
        },
        {
            institution: 'Pace Junior Science College Andheri',
            year: '2018 - 2020',
            degree: 'Higher Secondary School',
            grade: 'Percentage: 67.23%',
        },
        {
            institution: 'S.M Shetty High School and Junior College',
            year: '2016 - 2018',
            degree: 'SSC',
            grade: 'Percentage: 90.40%',
        },
    ];

    return (
        <section class="education" id="education">
            <Container className="education-section">
                <h2 className="text-center mb-5">Education</h2>
                <div className="education-list">
                    {educationDetails.map((education, index) => (
                        <div className="education-item" key={index}>
                            <div className="badge-no">
                                <span>{index + 1}</span>
                            </div>
                            <div className="education-content">
                                <h3>{education.institution}</h3>
                                <span>{education.year}</span>
                                <p><strong>{education.degree}</strong></p>
                                <p>{education.grade}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
