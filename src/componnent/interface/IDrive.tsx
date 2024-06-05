import { ObjectId } from 'mongodb';
export interface IDrive {
    id: ObjectId,
    driver:ObjectId,
    leavingTime:Date,
    target:{
        city:string,
        street:string,
        numBuild:Number
    },
    price: Number,
    availablePlaces: Number,
    passengers:[]
};