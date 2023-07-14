import { useState, useEffect } from "react"
import { GetSingleLocation, ResidentInfoLocation } from "../../services/GetSingleLocation"

export const useLocationInfo = (id) => {
    const [info, setInfo] = useState()
    const [resident, setResident] = useState()
    
    useEffect(() => {
        GetSingleLocation({ id: id }).then(response => setInfo(response))
    }, [])

    useEffect(() => {
        if (!info) return
        ResidentInfoLocation(info.residents).then(response => setResident(response))
    }, [info])


    return { info, resident }
}