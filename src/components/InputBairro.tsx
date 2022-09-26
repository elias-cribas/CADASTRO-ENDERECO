import React, { useCallback, useState } from "react"
import { Contexto } from "../provedor/contexto"

export default function () {
    const { bairro, setBairro } = React.useContext(Contexto)

    const selectBairro = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setBairro(ev.currentTarget.value)
    }

    return <>
        <input placeholder="BAIRRO" value={bairro} onChange={(ev) => selectBairro(ev)} id="input-bairro" type="text"/>
    </>
}