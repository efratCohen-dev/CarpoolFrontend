import axios from "axios"
import { ObjectId } from "mongodb"
import { useEffect, useState } from "react"

const useGet = (url: string) => {
    const [res, setRes] = useState([])
    const axiosData = async () => {
        try {
            const get = await axios.get(url)
            setRes(get.data)
        } catch {
            console.log("error get", url)
        }
    }
    return { axiosData ,res}
}
export default useGet