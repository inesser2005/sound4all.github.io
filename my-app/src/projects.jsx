import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
    const meusProjetos = [
        {
            id: 1,
            titulo: "Summer Sessions 2024",
            categoria: "Production",
            tecnologias: "Ableton Live, Serum",
            videoUrl: "https://www.pexels.com/download/video/855085/",
            desc: "A full production process focusing on summer vibes and clean mixdowns."
        },
        {
            id: 2,
            titulo: "Studio Workflow",
            categoria: "Sound Design",
            tecnologias: "Analog Synths, Logic Pro",
            videoUrl: "https://www.pexels.com/download/video/8028089/",
            desc: "Exploring textures and atmospheric sounds for cinematic backgrounds."
        }
    ];

    return (
        <div className="container pb-5">
            <h2 className="mb-4">Project Showcases</h2>

            <div className="row g-4">
                {meusProjetos.map((proj) => (
                    <div className="col-lg-6" key={proj.id}>
                        <div className="card bg-dark text-white border-secondary h-100 feature-box">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src={proj.videoUrl}
                                    title={proj.titulo}
                                    allowFullScreen
                                    className="rounded-top"
                                ></iframe>
                            </div>

                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <h4 className="card-title mb-0">{proj.titulo}</h4>
                                    <span className="badge badge-categoria">{proj.categoria}</span>
                                </div>

                                <p className="card-text text-secondary mb-3">{proj.desc}</p>

                                <div className="p-3 rounded-3" style={{ backgroundColor: '#1a1a1a', borderLeft: '4px solid #0F8B8D' }}>
                                    <small className="text-uppercase fw-bold" style={{ color: '#0F8B8D' }}>Tools & Gear:</small>
                                    <p className="mb-0 small">{proj.tecnologias}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

           <div className="row mt-5 pt-lg-4">
                <div className="col-12 text-center py-5 px-4 rounded-4"
                    style={{ background: 'linear-gradient(135deg, #0F8B8D 0%, #0a5a5b 100%)' }}>
                    <h2 className="display-5 fw-bold text-white mb-3">Let's build your sound together.</h2>
                    <p className="lead text-white mb-4 opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
                        Whether you need a professional mix, a custom sound design, or a full album production,
                        I'm here to bring your vision to life. High-quality sound for everyone.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="mailto:contact@sound4all.com" className="btn btn-light btn-lg px-5 fw-bold" style={{ color: '#0F8B8D' }}>
                            Start a Project
                        </a>
                        <Link to="/about" className="btn btn-outline-light btn-lg px-4">
                            View My Process
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
