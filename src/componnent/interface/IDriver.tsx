import { ObjectId } from 'mongodb';
export interface IDriver {
    // driverID(driverID: any): unknown;
    id?: ObjectId,
    name: String,
    password:String,
    email:String,
    phone:number
};