import { useState, useEffect } from "react"
import { GetSingleLocation, ResidentInfoLocation, getResident } from "../../services/GetSingleLocation"

export const useLocationInfo = (id) => {
    const [info, setInfo] = useState()
    const [resident, setResident] = useState()
    const [dataResident, setDataResident] = useState()

    useEffect(() => {
        GetSingleLocation({ id: id }).then(response => setInfo(response))
    }, [])

    useEffect(() => {
        if (!info) return
        ResidentInfoLocation(info.url).then(response => setResident(response))
    }, [info])

    useEffect(() =>{
        if (!resident) return
        getResident(resident.residents).then(response => setDataResident(response))
    },[resident])












    return { info, resident, dataResident }
}