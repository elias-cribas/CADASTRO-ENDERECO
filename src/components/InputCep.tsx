import React, { useState } from "react";
import { Contexto } from "../provedor/contexto"

export default function () {
    const { setUf, setCidade, setBairro, setRua, setCep } = React.useContext(Contexto)
    const [ error, setError ] = useState(false)

    const updateCep = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length < 9) return
        setCep(ev.currentTarget.value)
        getEndereco(ev.currentTarget.value)
    }

    const getEndereco = async (cep: string) => {
        const requestCodigo = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const responseCodigo = await requestCodigo.json()
        if (responseCodigo.erro) {
            setError(responseCodigo.erro)
            return
        }

        setError(false)
        setUf(responseCodigo.uf)
        setCidade(responseCodigo.localidade)
        setBairro(responseCodigo.bairro)
        setRua(responseCodigo.logradouro)
    }

    const mascara = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "")
        ev.currentTarget.value = ev.currentTarget.value.replace(/^(\d{5})(\d{3})/, "$1-$2")
    }

    return <>
        <input type="text" placeholder="00000-000" maxLength={9} onKeyUp={
            (ev) => {
                mascara(ev)
                updateCep(ev)
            }
        }/>
        {error ? <span>Nenhum endereço encontrado</span> : false}
    </>
}