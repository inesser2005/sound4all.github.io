import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container-fluid p-0">
            <div className="bg-dark text-white py-5 mb-5" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/30271349/pexels-photo-30271349.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="container text-center">
                    <h1 className="display-2 fw-bold mb-3">Sound4all</h1>
                    <p className="lead fs-3 mb-4 opacity-75">The ultimate experience for music and tech lovers.</p>
                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/store" className="btn btn-light btn-lg px-4 fw-bold" style={{ color: '#0F8B8D' }}>Visit Store</Link>
                        <Link to="/albuns" className="btn btn-outline-light btn-lg px-4">Listen Now</Link>
                    </div>
                </div>
            </div>

            {/* 2. Secção de Destaques com Melhor Contraste */}
            <div className="container py-5">
                <div className="row text-center g-4">
                    <div className="col-md-4">
                        {/* Usei a classe 'feature-box' que definimos no App.css */}
                        <div className="p-4 rounded-4 feature-box">
                            <i className="bi bi-disc fs-1 mb-3" style={{ color: '#0F8B8D' }}></i>
                            <h3 className="text-white">Latest Albums</h3>
                            <p className="text-secondary">Check out our new releases and exclusive tracks.</p>
                            <Link to="/albuns" className="text-decoration-none fw-bold" style={{ color: '#0F8B8D' }}>Explore →</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 rounded-4 feature-box">
                            <i className="bi bi-bag-check fs-1 mb-3" style={{ color: '#0F8B8D' }}></i>
                            <h3 className="text-white">Official Merch</h3>
                            <p className="text-secondary">Limited edition clothes and signed accessories.</p>
                            <Link to="/store" className="text-decoration-none fw-bold" style={{ color: '#0F8B8D' }}>Shop Now →</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 rounded-4 feature-box">
                            <i className="bi bi-people fs-1 mb-3" style={{ color: '#0F8B8D' }}></i>
                            <h3 className="text-white">Community</h3>
                            <p className="text-secondary">Join thousands of fans around the world.</p>
                            <Link to="/about" className="text-decoration-none fw-bold" style={{ color: '#0F8B8D' }}>Learn More →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
