import axios from "axios"
import {IDrive} from '../componnent/interface/IDrive'
import {IDriver} from '../componnent/interface/IDriver'

const useUpdate = (url:string) => {

    const axiosDataPut = async (updateData:IDrive|IDriver) => {
        try {
            const put = await axios.put(`${url}/${updateData.id}`, updateData)
        } catch {
            console.log("error put")
        }
    }
    return { axiosDataPut }
}
export default useUpdate