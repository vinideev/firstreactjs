export default function SecaoSobre() {
    return (
        <section className="secao-sobre">
            <div>
                <h1>Quem somos?</h1>
                <p>Fundada em Barra Mansa - RJ, a BAGZZ foi fruto de uma vontade de inovar, trazendo o melhor da moda e praticidade na hora de carregar seus objetos. Prezamos sempre o bom atendimento e </p>

                <div className="card-sobre">
                    <div className="cards-sobre">
                        <img className="img-sobre" src="assets/shop1.jpg"/>
                    </div>
                    <div  className="cards-sobre" >
                        <h1>NOSSAS FILIAIS</h1>
                        <p>Cerca de 4 lojas espalhadas pelo Rio de Janeiro</p>
                    </div>
                    <div className="cards-sobre">
                        <h1>Criação Artesanal</h1>
                        <p>Todas as nossas peças são feitas pela nossa propria equipe.</p>
                    </div>
                    <div className="cards-sobre">
                        <img className="img-sobre"  src="assets/machine.jpg"/>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}