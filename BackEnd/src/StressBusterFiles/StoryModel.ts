import mongoose from 'mongoose'
import {createSchema,Type,typedModel} from 'ts-mongoose'

const StorySchema= createSchema({
    storyNo:        Type.number({required:true}),
    character1:     Type.string({required:true}),
    character2:     Type.string({required:true}),
    c1:             Type.string({required:true}),
    c2:             Type.string({required:true}),
});

const StoryModel = typedModel('stories',StorySchema,undefined,undefined,{
    help:()=>{
        return null;
    }
});

export default StoryModel;