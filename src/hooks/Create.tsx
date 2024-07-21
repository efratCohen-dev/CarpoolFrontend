import axios from 'axios';
import Cookies from "cookies-ts"
import { IDriver } from '../componnent/interface/IDriver'
import { IDrive } from '../componnent/interface/IDrive';
import { useState } from 'react';

const useCreate = () => {

    const [res, setRes] = useState<IDriver | IDrive>();
    const axiosDataCreate = async (url: string,newData: IDriver | IDrive) => {

        try {

            const cookies = new Cookies();
            if (url.substring(url.length - 1, url.length) != 'r') {
                const post = await axios.post(url, { data: newData, token: cookies.get('token') });
                setRes(post.data);
                console.log("post.data",post.data)

            } else {
                const post = await axios.post(url, newData);
                setRes(post.data.newDriver);
                cookies.set("token", post.data.token);
                console.log("post.data.newDriver",post.data.newDriver)
            }

        } catch (error) {
            console.log("error post: ", error)
        }

    }
    return { res, axiosDataCreate }
}
export default useCreate