import mongoose from 'mongoose'
import {App1} from '../app_old'
import {createSchema,Type,typedModel} from 'ts-mongoose'
import { any } from 'async';

const ImageSchema= createSchema({
    logEntryId:     Type.objectId({required:true}),
    path:           Type.string({required:true}),
    label:          Type.string({required:true}),
    createdAt:      Type.date({required:true,default:Date.now})
});

ImageSchema.virtual("something").get(()=>{
    console.log("Hello");
});

const ImageModel=typedModel("Images",ImageSchema,undefined,undefined,{
    hey:function(name:string){
        return this.find({name});
    },
    hi: meth,

},App1.instance.conn);

function meth(){

}
export default ImageModel;