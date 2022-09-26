import React, { useCallback, useState } from "react"
import { Contexto } from "../provedor/contexto"

export default function () {
    const { rua, setRua } = React.useContext(Contexto)

    const selectRua = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setRua(ev.currentTarget.value)
    }

    return <>
        <input placeholder="RUA" value={rua} onChange={(ev) => selectRua(ev)} id="input-rua" type="text"/>
    </>
}