import mongoose, { MongooseDocument, Model } from 'mongoose';
import {Request,Response} from 'express';
import express from 'express';
import PostModel from '../models/PostModel';
import StoryModel from './StoryModel';
// import '../Old Models And Routes/routes/node_modules/dotenv/lib/env-options';
import 'mongoose';
import { typedModel } from 'ts-mongoose';
import { App1 } from '../app_old';
import { Result } from 'express-validator';

//Stress Buster Routing
export class StoryModelRoutes
{
    // public PostSchema PostModel:;
    public app : express.Application;

    constructor(app:any){
        this.app=app;
        this.launchRoutes();
    }

    public launchRoutes():void{
        this.app.route('/university/:storyNo').get(this.GetStoryData);
    }

    //Stress buster Routing
    public async GetStoryData(req:Request,res:Response){
        await StoryModel.findOne({storyNo:(Number)(req.params.storyNo)},(err,data)=>{
            if(err) res.send(err);
            res.send(data);
            // console.log(data?.c1);
            // console.log(data)
        });
        
    }
}
