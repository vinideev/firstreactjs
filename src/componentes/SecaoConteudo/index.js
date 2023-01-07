
export default function SecaoConteudo(){
    return(
        <section className="secao-conteudo">
            <div className="divisao-conteudo">
             <div className="topo-conteudo">
                <h2 className="h2-conteudo">NOSSOS PRODUTOS</h2>
                <p>Trabalhos com shoulder bags de todos os modelos tanto no masculino e feminino, trazendo o melhor em qualidade e estilo para seu dia-a-dia.</p>
             </div>   

                <div className="produtos-conteudo">
                    <div className="card-conteudo">
                        <h2 className="h2-bag">BAG HAOSHUAI</h2>
                        
                        <img className="img-conteudo" src="assets/bag1.jpg" alt='BAG HAOSHAI'/>

                        <div className="shop-conteudo">
                        <p>R$ 140,00</p>
                        <img className="buy-icone" src="assets/buy.png"/>
                        </div>

                    </div>
                    <div className="card-conteudo">
                        <h2 className="h2-bag">BAG HOSHWEAR</h2>
                        <img className="img-conteudo" src="assets/bag2.jpg" alt='BAG HOSHWEAR'/>

                       <div className="shop-conteudo"> 
                        <p>R$ 140,00</p>
                        <img className="buy-icone" src="assets/buy.png"/>
                        </div>
                        
                    </div>
                    <div className="card-conteudo">
                        <h2 className="h2-bag">BAG SKATEBOARD</h2>
                        <img className="img-conteudo" src="assets/bag3.jpg" alt='BAG SKATEBOARD'/>

                        <div className="shop-conteudo"> 
                        <p>R$ 85,00</p>
                        <img className="buy-icone" src="assets/buy.png"/>
                        </div>

                    </div >
                    <div className="card-conteudo">
                        <h2 className="h2-bag">INVISIBLE BAG</h2>
                        <img className="img-conteudo" src="assets/bag4.jpg" alt='INVISIBLE BAG'/>

                        <div className="shop-conteudo"> 
                        <p>R$ 120,00</p>
                        <img className="buy-icone" src="assets/buy.png"/>
                        </div>

                    </div>
                    
                </div>

                <div className="lista">
                    <p>Todos os produtos incluem:</p>
                    <ul >
                        <li>Garantia de 1 ano</li>
                        <li>Frete taxa unica</li>
                        <li>Desconto na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}