import axios from "axios"
import { ObjectId } from 'mongodb';
import Cookies from "cookies-ts"
import { useState } from "react";


const useDelete = (url: string) => {

    const [res,setRes]=useState(false)
    const axiosDataDelete = async (id: ObjectId) => {
        const cookies = new Cookies();
        try {
            const deletedrive = await axios.delete(`${url}/${id}`, { data: { token: cookies.get('token') } });
            setRes(true);
        } catch {
            setRes(false);
            // console.log("error delete");
           

        }
    }
    return {res, axiosDataDelete }
}
export default useDelete