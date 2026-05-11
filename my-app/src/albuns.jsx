import React from 'react';

export default function Albuns() {
    const imagens = [
        { id: 1, url: 'https://images.pexels.com/photos/13861175/pexels-photo-13861175.jpeg', titulo: 'Concerto 2023', desc: 'Lisboa, Portugal' },
        { id: 2, url: 'https://images.pexels.com/photos/29234302/pexels-photo-29234302.jpeg', titulo: 'Estúdio', desc: 'Gravação do novo álbum' },
        { id: 3, url: 'https://images.pexels.com/photos/13248795/pexels-photo-13248795.jpeg', titulo: 'Bastidores', desc: 'Tour Europeia' },
        { id: 4, url: 'https://images.pexels.com/photos/29234302/pexels-photo-29234302.jpeg', titulo: 'Promo', desc: 'Sessão fotográfica' },
    ];

    return (
        <div className="container">
            <h2 className="mb-4">Galeria de Álbuns</h2>

            <p className='p-3'>Algumas fotos para exemplificar...</p>

            <div className="row g-4">
                {imagens.map((foto) => (
                    <div className="col-12 col-md-6 col-lg-4" key={foto.id}>
                        {/* O card agora tem a classe h-100 para todos terem a mesma altura */}
                        <div className="card bg-dark text-white border-secondary h-100">
                            <div className="img-container">
                                <img
                                    src={foto.url}
                                    className="card-img-top"
                                    alt={foto.titulo}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                            </div>
                            
                            {/* Seccção de texto */}
                            <div className="card-body ">
                                <h5 className="card-title">{foto.titulo}</h5>
                                <p className="card-text text-secondary">{foto.desc}</p>
                            </div>
                            
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
