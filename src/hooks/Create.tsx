import axios from 'axios';
import Cookies from "cookies-ts"
import { IDriver } from '../componnent/interface/IDriver'
import { IDrive } from '../componnent/interface/IDrive';

const useCreate = (url: string) => {

    const axiosDataCreate = async (newData: IDriver | IDrive) => {
        try {
            const cookies = new Cookies();
            if (url.substring(url.length - 1, url.length) != 'r') {
                const post = await axios.post(url, { data: newData, token: cookies.get('token') });
            } else {
                const post = await axios.post(url, newData);
                cookies.set("token", post.data.token);
            }

        } catch (error) {
            console.log("error post: ", error)
        }

    }
    return { axiosDataCreate }
}
export default useCreate