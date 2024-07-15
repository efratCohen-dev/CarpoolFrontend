import axios from 'axios';
import Cookies from "cookies-ts"
import { IPassenger } from '../componnent/interface/IPassenger';
import { ObjectId } from 'mongodb';

const useCreatePassenger = (url: string) => {

    const axiosDataCreatePassenger = async (newData: IPassenger,ID:string) => {
        try {
            // const cookies = new Cookies();
         console.log("http://localhost:8787/join/668d261e0caf05f2e5691f58",`${url}/${ID}`);
         
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