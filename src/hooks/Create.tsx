import axios from 'axios';
import Cookies from "cookies-ts"
import { IDriver } from '../componnent/interface/IDriver'

const useCreate = (url: string) => {

    const axiosDataCreate = async (newData: IDriver) => {
        try {
            const cookies = new Cookies();
            console.log("url", url);
            console.log("newData", newData);
            const post = await axios.post(url, newData);
            if(url.substring(url.length-1,url.length) =='r'){
                console.log("if");
                cookies.set("token", post.data.token);
            }else{
                cookies.get("token");
            }
            console.log("post", post);

        } catch (error) {
            console.log("error post: ", error)
        }

    }
    return { axiosDataCreate }
}
export default useCreate