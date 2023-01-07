import React from "react";

export default function Topo() {
    return (
    <header> 
        <div className="topo-sessao">
            <div className="sessao-img">
           <img className="icon-topo" src='assets/backpack.png' alt="Icone Bag" />
           <p className="paragrafo-topo">BAGZZ</p>
           </div>

           <nav>
                <a href="google.com">Produtos</a>
                <a href="google.com">Sobre</a>
                <a href="google.com">Contato</a>
           </nav>
        </div>
    </header>
    );
}