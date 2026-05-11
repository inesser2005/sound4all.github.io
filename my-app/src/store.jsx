import React, { useState } from 'react';

export default function Store() {
    const produtosBase = [
        { id: 1, nome: "Vinyl - Concert 2023", preco: 25.00, categoria: "Music", img: "https://images.pexels.com/photos/1300578/pexels-photo-1300578.jpeg" },
        { id: 2, nome: "T-shirt Tour", preco: 20.00, categoria: "Clothes", img: "https://images.pexels.com/photos/1300578/pexels-photo-1300578.jpeg" },
        { id: 3, nome: "Autographed Poster", preco: 15.00, categoria: "Merch", img: "https://images.pexels.com/photos/1300578/pexels-photo-1300578.jpeg" },
        { id: 4, nome: "Digital Pack", preco: 10.00, categoria: "Music", img: "https://images.pexels.com/photos/1300578/pexels-photo-1300578.jpeg" },
    ];

    const [cart, setCart] = useState(0);
    
    // 1. Estado para a categoria selecionada (começa com "All")
    const [categoriaAtiva, setCategoriaAtiva] = useState("All");

    // 2. Lógica de filtragem: Se for "All", mostra tudo. Se não, filtra pela categoria.
    const produtosFiltrados = categoriaAtiva === "All" 
        ? produtosBase 
        : produtosBase.filter(p => p.categoria === categoriaAtiva);

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Official Store</h2>
                <div className="btn btn-carrinho">
                    <i className="bi bi-cart me-2"></i> Cart: <strong>{cart}</strong> items
                </div>
            </div>

            {/* 3. Botões de Filtro */}
            <div className="mb-4 d-flex gap-2">
                {["All", "Music", "Clothes", "Merch"].map(cat => (
                    <button 
                        key={cat}
                        className={`btn ${categoriaAtiva === cat ? 'btn-adicionar' : 'btn-outline-light'}`}
                        onClick={() => setCategoriaAtiva(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="row g-4">
                {/* 4. Usamos a lista FILTRADA aqui */}
                {produtosFiltrados.map((produto) => (
                    <div className="col-12 col-md-6 col-lg-3" key={produto.id}>
                        <div className="card h-100 bg-dark text-white border-secondary">
                            <div className="img-container">
                                <img src={produto.img} className="card-img-top" alt={produto.nome} />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <span className="badge badge-categoria mb-2 w-50">{produto.categoria}</span>
                                <h5 className="card-title">{produto.nome}</h5>
                                <p className="card-text fs-4">{produto.preco.toFixed(2)}€</p>
                                <button className="btn btn-adicionar mt-auto" onClick={() => setCart(cart + 1)}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
