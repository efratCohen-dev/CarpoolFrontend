import { ObjectId } from 'mongodb';
export interface IPassenger {
    id?: ObjectId,
    name: String,
    email:String,
};