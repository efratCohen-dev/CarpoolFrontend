import axios from 'axios';
import {IDrive} from '../componnent/interface/IDrive'
import { IDriver } from '../componnent/interface/IDriver'

const useCreate = (url:string) => {

    const axiosDataCreate = async (newData: IDriver) => {
        try {
            const post = await axios.post(url, newData)
            console.log("post",post);
            
        } catch(error) {
            console.log("error post: ", error)
        }
   
    }
    return { axiosDataCreate }
}
export default useCreate