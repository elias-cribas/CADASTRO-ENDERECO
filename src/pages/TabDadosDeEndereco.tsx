import InputCidades from "../components/InputCidades"
import InputEstados from "../components/InputEstados"
import InputBairro from "../components/InputBairro"
import InputRua from "../components/InputRua"
import InputCep from "../components/InputCep"
import ContextoProvider from "../provedor/contexto"
import "../style/TabDadosDeEndereco.css"
export default function() {

    return <>
        <div className="cadastro">
            <h1>CADASTRO: Dados de Endereço</h1>
            <ContextoProvider>
                <InputCep/>
                <InputEstados/>
                <InputCidades/>
                <InputBairro/>
                <InputRua/>
            </ContextoProvider>
        </div>

    </>
}