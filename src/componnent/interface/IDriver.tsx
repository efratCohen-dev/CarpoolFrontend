import { ObjectId } from 'mongodb';
export interface IDriver {
    id?: ObjectId,
    name: String,
    password:String,
    email:String,
    phone:number
};