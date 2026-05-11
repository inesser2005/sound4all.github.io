import React from 'react';

export default function AppFooter() {
    return (
        <footer className="py-4 mt-5" style={{ backgroundColor: '#0F8B8D', color: 'white' }}>
            <div className="container text-center">
                <h4 className="fw-bold mb-3">Sound4all</h4>
                <div className="d-flex justify-content-center gap-4 mb-3 fs-4">
                    {/* Links para redes sociais */}
                    <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-white"><i className="bi bi-spotify"></i></a>
                    <a href="#" className="text-white"><i className="bi bi-github"></i></a>
                    <a href="#" className="text-white"><i className="bi bi-envelope-at"></i></a>
                </div>
                <hr className="w-25 mx-auto" />
                <p className="small mb-0 opacity-75">
                    &copy; {new Date().getFullYear()} Sound4all. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
