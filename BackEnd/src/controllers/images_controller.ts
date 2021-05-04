import { Request, Response } from "express";
import mongoose from 'mongoose'
import ImageModel from "../models/ImageModel";
import fs from "fs";
import path from 'path';
import { Model } from "mongoose";
import { Types } from "mongoose";

export class ImagesController{

    public async index(req:Request,res:Response){
        await ImageModel.find({logEntryId:req.params.log_entry_id},(err,image)=>{
            if(err) res.send(err);
            res.json(image);
        });
    }

    public async create(req:Request,res:Response){
        const remove=path.join(__dirname,"..","..","public");
        const relPath=req.file.path.replace(remove,"");
        const newImage=new ImageModel(req.body);
        
        newImage.label=req.body.label;
        newImage.logEntryId=Types.ObjectId(req.params.log_entry_id);
        newImage.path= relPath;
    
        await newImage.save((err,image)=>{
            if(err) res.send(err);
            res.json(image);
        });

    }

    public async delete(req:Request,res:Response){
        var x=await ImageModel.deleteOne({logEntryId:req.params.logId},(err)=>{
            if(err) {res.send(err);return;}
        });

        res.send("Done");
    }

    public async show(req:Request,res:Response){
        await ImageModel.findById(Types.ObjectId(req.params.id),(err,data)=>{
            if(err) res.send(err);
            res.json(data);
        });
    }

    public async update(req:Request,res:Response){
        await ImageModel.findOneAndUpdate({_id:req.params._id},req.body,{new:true},(err,data)=>{
            if(err) res.send(err)
            res.json(data)            
        });

    }

}