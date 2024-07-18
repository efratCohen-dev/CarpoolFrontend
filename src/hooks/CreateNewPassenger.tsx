import axios from 'axios';
import Cookies from "cookies-ts"
import { IPassenger } from '../componnent/interface/IPassenger';
import { ObjectId } from 'mongodb';

const useCreatePassenger = (url: string) => {

    const axiosDataCreatePassenger = async (newData: IPassenger,ID:string) => {
        try {
            const post = await axios.post(`${url}/${ID}`, newData);
            // if(url.substring(url.length-1,url.length) =='r'){
            //     console.log("if");
            //     cookies.set("token", post.data.token);
            // }else{
            //     cookies.get("token");
            // }
            console.log("post Passenger", post);

        } catch (error) {
            console.log("error post Passenger: ", error)
        }

    }
    return { axiosDataCreatePassenger }
}
export default useCreatePassenger