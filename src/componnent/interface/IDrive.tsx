import { ObjectId } from 'mongodb';
export interface IDrive {
    id: ObjectId,
    driver:ObjectId,
    leavingTime:Date,
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
    availablePlaces: Number,
    passengers:[]
};