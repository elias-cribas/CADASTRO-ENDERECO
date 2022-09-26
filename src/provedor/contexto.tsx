import React, {useState} from "react";

type EnderecoTipo = {
    uf: string,
    setUf: React.Dispatch<React.SetStateAction<string>>,

    cidade: string,
    setCidade: React.Dispatch<React.SetStateAction<string>>,
    
    bairro: string,
    setBairro: React.Dispatch<React.SetStateAction<string>>
    
    rua: string,
    setRua: React.Dispatch<React.SetStateAction<string>>,
    
    cep: string,
    setCep: React.Dispatch<React.SetStateAction<string>>,
}

export const Contexto = React.createContext({} as EnderecoTipo)

export default function ContextoProvider(props: React.PropsWithChildren) {
    const [uf, setUf] = useState("")
    const [cidade, setCidade] = useState("")
    const [bairro, setBairro] = useState("")
    const [rua, setRua] = useState("")
    const [cep, setCep] = useState("")

    return (
        <Contexto.Provider value = 
            {{
                uf, setUf, cidade, setCidade, bairro, setBairro, rua, setRua, cep, setCep
            }}>
            {props.children}
        </Contexto.Provider>
    )
}