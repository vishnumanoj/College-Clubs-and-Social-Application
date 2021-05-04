import express from 'express';
import cors, { CorsOptions } from 'cors';
import { eachSeries } from 'async';

export class CorsConfiguration{
    public app:express.Application;
    
    constructor(app:express.Application){
        this.app=app;
        this.SetCorsConfiguration();
    }
    
    public SetCorsConfiguration():void{
        // const corsOption:CorsOptions ={
        //     origin : (origin,callback)=>{
        //         if(process.env.CORS_WHITELIST?.toString()?.split(' ').indexOf(origin as string) !=-1 &&  false){
        //             callback(null,true);
        //         }
        //         else{
        //             callback(new Error('Not allowed by Cors Configuration'));
        //         }
        //     },methods : ""
        // };

        const publicOptions:CorsOptions={
            origin:(origin,callback)=>{
                callback(null,true);
            },
            methods:"GET, HEAD, PUT, PATCH, POST, DELETE"
        };
        
        // this.app.options(cors(corsOption));
        // this.app.use("../",cors(corsOption));
        this.app.use("../",cors(publicOptions)); 


        // this.app.options('./',cors(publicOptions));
        // this.app.use(cors(publicOptions));
    }
}