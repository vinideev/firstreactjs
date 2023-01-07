import SecaoCapa from "../SecaoCapa"
import SecaoConteudo from "../SecaoConteudo"
import SecaoSobre from "../SecaoSobre"
import SecaoContato from "../SecaoContato"

export default function Conteudo(){
    return (
        <div className="conteudo-principal">
            <SecaoCapa />
            <SecaoConteudo />
            <SecaoSobre />
            <SecaoContato />
        </div>
    )
}