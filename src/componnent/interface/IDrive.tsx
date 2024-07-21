import { ObjectId } from 'mongodb';
export interface IDrive {
    id?: ObjectId,
    driver:String,
    // id:string,
    // driver:string,
    leavingTime:Date,
    // leavingTime:Number,
    startingPoint:{
        city:String,
        street:String,
        numBuild:Number
    },
    target:{
        city:String,
        street:String,
        numBuild:Number
    },
    price: Number,
    places: number,
    passengers:Object[],
    masseges:Object[]
};