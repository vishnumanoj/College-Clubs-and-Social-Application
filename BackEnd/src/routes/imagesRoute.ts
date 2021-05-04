import express, { Request, Response} from 'express';
import mongoose from 'mongoose';
import {App1} from '../app_old'
import fs, { NoParamCallback } from 'fs';
import path from 'path';
import multer from 'multer';


export class cors{
    constructor(){
        this.LoadCorsValues();
    }
    public LoadCorsValues(){
        const storage=multer.diskStorage({
            destination : async (req,file,call)=>{
                const uploadDir=path.join( __dirname,"../..","public","uploads",`${Date.now()}`)
                await fs.mkdir(uploadDir,{recursive:true},(err)=>{
                    if(err) {
                    console.log("File Not Creater due to : "+err?.message);
                    throw err;
                    }
                });
                call(null,uploadDir);
            },
            filename: (req,file,call)=>{
                call(null,file.originalname);
            }
        });

        const upload=multer({storage:storage,}).single("data");

        App1.instance.app.route('/log-entries/:log_entry_id/images')
        .get(App1.instance.imageController.index)
        .post(async (req:Request,res:Response)=>{await upload(req,res,(err)=>{
            if(err){
                console.log(err);
                res.status(500).send("Error");
            }
            else{
                console.log("Saved");
                res.status(200).send("Uploaded");
                App1.instance.imageController.create
            }
        })});

        App1.instance.app.route('/log-entries/images/:id')
        .get(App1.instance.imageController.show)
        .post(App1.instance.imageController.update);

        App1.instance.app.route('/log-entries/deleteImages/:logId')
        .get(App1.instance.imageController.delete);

    }
} 