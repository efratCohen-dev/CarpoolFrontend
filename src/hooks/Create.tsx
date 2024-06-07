import axios from 'axios';
import {IDrive} from '../componnent/interface/IDrive'
import { IDriver } from '../componnent/interface/IDriver'

const useCreate = (url: string) => {

    const axiosDataCreate = async (newData: IDrive | IDriver) => {
        try {
            const post = await axios.post(url, newData)
        } catch {
            console.log("error post")
        }
    }
    return { axiosDataCreate }
}
export default useCreate