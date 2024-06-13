import { ObjectId } from 'mongodb';
export interface IDriver {
    id: ObjectId,
    name: string,
    password:string,
    email:string,
    phone:number
};
/**
 *
 */
// constructor(driver) {
  
    
// }