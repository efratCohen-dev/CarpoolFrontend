import { ObjectId } from 'mongodb';
export interface IMassage {
    id?: ObjectId,
    massage: String,
    email:String
};