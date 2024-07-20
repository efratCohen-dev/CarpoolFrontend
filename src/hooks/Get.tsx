import axios from "axios"
import { ObjectId } from "mongodb"
import { useEffect, useState } from "react"

const useGet = (url: string) => {
    const [res, setRes] = useState([])
    useEffect(() => {
        console.log("res hook", res);
    }, [res])
    const axiosData = async () => {
        try {
            console.log("get")
            const get = await axios.get(url)
            setRes(get.data)
        } catch {
            console.log("error get", url)
        }
    }
    return { axiosData ,res}
}
export default useGet