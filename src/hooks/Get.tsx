import axios from "axios"
import { ObjectId } from "mongodb"
import { useState } from "react"

const useGet = (url: string) => {

    const [res, setRes] = useState([])
    const axiosData = async () => {
        try {
            const get = await axios.get(url)
            setRes(get.data)
        } catch {
            console.log("error get",url)
        }
    }
    return { res, axiosData }
}
export default useGet