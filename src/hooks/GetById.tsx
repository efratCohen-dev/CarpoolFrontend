import axios from "axios"
import { useState } from "react"
import { ObjectId } from 'mongodb'; 

const useGetById = (url: string) => {

    const [res, setRes] = useState({})
    const axiosData = async (id:ObjectId) => {
        try {
            const get = await axios.get(`${url}/${id}`)
            setRes(get.data)
        } catch {
            console.log("error get")
        }
    }
    return { res, axiosData }
}
export default useGetById
