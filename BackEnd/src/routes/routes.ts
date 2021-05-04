import mongoose, { MongooseDocument, Model } from 'mongoose';
import {Request,Response} from 'express';
import express from 'express';
import PostModel from '../models/PostModel';
import StoryModel from '../StressBusterFiles/StoryModel';
import 'dotenv/lib/env-options';
import 'mongoose';
import { typedModel } from 'ts-mongoose';
import { App1 } from '../app_old';

export class Routes
{
    // public PostSchema PostModel:;
    public app : express.Application;

    constructor(app:any){
        this.app=app;
        this.launchRoutes();
    }

    public launchRoutes():void{
        this.app.route('/post').get(this.CheckPostsPage);
        this.app.route('/post').post(this.AddTestData);
    }

    public CheckPostsPage(req:Request,res:Response){
        res.send("We are on posts now, okay");
    }

    public async AddTestData(req:Request,res:Response){
        let post =new PostModel(req.body);
        
        await post.save((err:any,data:any)=>{
            if(err)
                res.send(err);
            res.json(data);
        });

    }
}
