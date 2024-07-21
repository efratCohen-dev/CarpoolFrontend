import axios from 'axios';
import Cookies from "cookies-ts"
import { IDriver } from '../componnent/interface/IDriver'
import { IDrive } from '../componnent/interface/IDrive';
import { useState } from 'react';
import { getCurrentDriver } from '../store/CurrentDriver';
import { createDriver } from '../store/Driver';
import { useDispatch } from 'react-redux';
import { createDrive } from '../store/Drive';

const useCreate = () => {
    const dispatch = useDispatch();
    const [res, setRes] = useState<IDriver | IDrive>();
    const axiosDataCreate = async (url: string, newData: IDriver | IDrive,driver?:IDriver ) => {

        try {
            const cookies = new Cookies();
            if (url.substring(url.length - 1, url.length) != 'r') {
                const post = await axios.post(url, { data: newData, token: cookies.get('token'),driver:driver});
                setRes(post.data);
                dispatch(createDrive({ drive: post.data }));
               

            } else {
                const post = await axios.post(url, newData);
                setRes(post.data.newDriver);
                dispatch(createDriver({ driver: post.data.newDriver }));
                dispatch(getCurrentDriver({ res: post.data.newDriver }));
                cookies.set("token", post.data.token);
            }

        } catch (error) {
            console.log("error post: ", error)
        }

    }
    return { res, axiosDataCreate }
}
export default useCreate