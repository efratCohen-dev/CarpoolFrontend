import axios from "axios"
import { useState } from "react"

const useGet = (url: string) => {

    const [res, setRes] = useState([])
    const axiosData = async () => {
        try {
            const get = await axios.get(url)
            setRes(get.data)
        } catch {
            console.log("error get")
        }
    }
    return { res, axiosData }
}
export default useGet