import axios from 'axios';
import Cookies from "cookies-ts"
import { IDriver } from '../componnent/interface/IDriver'
import { IDrive } from '../componnent/interface/IDrive';
import { useState } from 'react';

const useGetByNamePassword = (url: string) => {
    const [res, setRes] = useState([])
    const axiosGetByNamePassword = async (data: any) => {
        try {
            const get = await axios.get(url, data)
            setRes(get.data)
        } catch {
            console.log("error get")
        }
    }

    return { res, axiosGetByNamePassword }
}
export default useGetByNamePassword