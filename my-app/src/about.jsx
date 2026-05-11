import React from 'react';

export default function About() {
    const skills = ["React", "Bootstrap", "Vite", "Web Design", "UI/UX"];

    return (
        <div className="container pb-5">
            {/* 1. Secção de Introdução (Hero) */}
            <div className="row align-items-center mb-5 mt-4">
                <div className="col-lg-6">
                    <h1 className="display-4 fw-bold mb-3">About the Sound4all</h1>
                    <p className="lead text-secondary">
                        Welcome to our official platform. Here, we combine passion for music
                        and technology to create a unique experience for our fans and customers.
                    </p>
                    <p>
                        This space was developed to centralize our latest releases,
                        exclusive merchandise, and a bit of our history. We believe that
                        every detail matters.
                    </p>
                       <p>
                        Disclamimer: This is a fake store!!!!
                    </p>
                </div>
                <div className="col-lg-5"> {/* Coluna da imagem */}
                    <img
                        src="https://images.pexels.com/photos/4930043/pexels-photo-4930043.jpeg"
                        alt="Workspace"
                        className="img-fluid rounded-4 shadow-lg w-100" // Adicionei 'w-100'
                        style={{
                            height: '400px',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>

            {/* 2. Secção de Skills / Factos */}
            <div className="row mt-5">
                <div className="col-12">
                    <h3 className="mb-4">Our Expertise</h3>
                    <div className="d-flex flex-wrap gap-3">
                        {skills.map(skill => (
                            <span
                                key={skill}
                                className="badge p-3 px-4 rounded-pill"
                                style={{ backgroundColor: '#0F8B8D', fontSize: '1rem' }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Secção de Contacto Simples */}
            <div className="row mt-5 pt-5">
                <div className="col-12 p-5 rounded-4 text-center" style={{ backgroundColor: '#0F8B8D' }}>
                    <h2 className="text-white fw-bold">Want to get in touch?</h2>
                    <p className="text-white opacity-75 mb-4">Send us an email for partnerships or questions.</p>
                    <a href="mailto:contact@example.com" className="btn btn-light btn-lg px-5 fw-bold" style={{ color: '#0F8B8D' }}>
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}