export default function SecaoContato() {
    return (
        <section className="secao-contato">
            <div>
                <div className="cabecalho-contato">
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimentos </p>
                </div>
                <div className="box-contato">
                    <div className="card-contato">
                        <h2 className="sub-contato">Contato</h2>
                        <div>
                            <div className="secao-contato">
                                <img className="icone-contato" src="assets/lancamento.png"/>
                                <p>Barra Mansa, Rj</p>
                            </div>
                            <div className="secao-contato">
                                <img className="icone-contato"  src="assets/telefone.png"/>
                                <p>(24) 98111 - 0000</p>
                            </div>
                            <div className="secao-contato">
                                <img className="icone-contato"  src="assets/email.png"/>
                                <p>contato@bagzzcloth.com</p>
                            </div>
                        </div>

                    </div>

                    <div className="card-contato">
                    <h2 className="sub-contato">Nossas Redes Sociais</h2>
                        <div>
                            <div className="secao-contato">
                                <img className="icone-contato"  src="assets/facebook.png"/>
                                <p>/BAGZZCLOTHING</p>
                            </div>
                            <div className="secao-contato">
                                <img className="icone-contato"  src="assets/twitter.png"/>
                                <p>@BAGZZCLOTHING</p>
                            </div>
                            <div className="secao-contato">
                                <img className="icone-contato"  src="assets/instagram.png"/>
                                <p>@BAGZZCLOTHING</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}