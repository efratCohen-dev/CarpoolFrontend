import axios from "axios"
import { ObjectId } from 'mongodb';
import Cookies from "cookies-ts"
import { useState } from "react";
import { IDriver } from "../componnent/interface/IDriver";


const useDelete = (url: string) => {

    const [res, setRes] = useState(false)
    const axiosDataDelete = async (id: ObjectId,driver:IDriver) => {
        const cookies = new Cookies();
        try {
            const deletedrive = await axios.delete(`${url}/${id}`, { data: { token: cookies.get('token') ,driver} });
            setRes(true);
        } catch {
            setRes(false);
        }
    }
    return { res, axiosDataDelete }
}
export default useDelete