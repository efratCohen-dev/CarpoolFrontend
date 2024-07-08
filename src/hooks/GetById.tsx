import axios from "axios"
import { useState } from "react"
import { ObjectId } from 'mongodb'; 

const useGetById = (url: string) => {

    const [resGetById, setRes] = useState({})
    const axiosDataGetById = async (id:ObjectId) => {
        try {
            console.log("useGetById axiosData", `${url}/${id}`);
            
            const get = await axios.get(`${url}/${id}`)
            setRes(get.data)
        } catch {
            console.log("error get")
        }
    }
    return { resGetById, axiosDataGetById }
}
export default useGetById
