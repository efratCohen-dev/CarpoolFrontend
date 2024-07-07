import { ObjectId } from 'mongodb';
export interface IDrive {
    // id: ObjectId,
    driver:ObjectId,
    id:string,
    // driver:string,
    leavingTime:Date,
    // leavingTime:Number,
    startingPoint:{
        city:String,
        street:String,
        numBuild:Number
    },
    destination:{
        city:String,
        street:String,
        numBuild:Number
    },
    price: Number,
    places: number,
    passengers:String[]
};