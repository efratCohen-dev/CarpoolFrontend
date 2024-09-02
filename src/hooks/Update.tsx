import axios from "axios"
import { IDrive } from '../componnent/interface/IDrive'
import { IDriver } from '../componnent/interface/IDriver'
import Cookies from "cookies-ts"
import { updateDrive } from "../store/Drive"


const useUpdate = () => {

    const axiosDataPut = async (url: string, updateData: IDrive | IDriver) => {
        const cookies = new Cookies();
        try {
            const put = await axios.put(`${url}/${updateData.id}`,{ data:updateData, token: cookies.get('token')})
            dispatch(updateDrive( put.data ));

        } catch {
            console.log("error put")
        }
    }
    return { axiosDataPut }
}
export default useUpdate

function dispatch(arg0: any) {
    throw new Error("Function not implemented.")
}
