import React, { useEffect, useState, useContext } from "react"
import { Contexto } from "../provedor/contexto"

export default function () {
    const [cidades, setCidades] = useState([])
    const [loading, setLoading] = useState(true)

    const { uf, setCidade, cidade } = useContext(Contexto)

    async function buscarCidades() {
        setLoading(true)
        if (!uf) return
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cidades = await requestCidades.json()
        setLoading(false)
        setCidades(cidades)
    }

    useEffect(() => {
        buscarCidades()
    }, [uf])

    const CidadeSelecionada = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setCidade(ev.currentTarget.value)
    }

    return <>
        {loading
            ? <input placeholder="CIDADE"></input>
            : <select id="cidade-selecionada" onChange={CidadeSelecionada} value={cidade}>{cidades.map(({ nome }, idx) => <option key={idx} value={nome}>{nome}</option>)}</select>
        }
    </>
}