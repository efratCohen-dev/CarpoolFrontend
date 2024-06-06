import axios from "axios"
import { ObjectId } from 'mongodb'; 

const useDelete = (url: string) => {

    const axiosDataDelete = async (id:ObjectId) => {
        try {
            const deleteT = await axios.delete(`${url}/${id}`)
        } catch {
            console.log("error delete")
        }
    }
    return { axiosDataDelete }
}
export default useDelete