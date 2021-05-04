import { Response, Request } from "express";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import path from "path";
import { CorsConfiguration } from "./cors_config";
import { ImagesController } from "./controllers/images_controller";
import { cors } from "./routes/imagesRoute";
import jwt from "jsonwebtoken";
import "dotenv/config"

export class App1 {
  public static instance: App1;
  public app: express.Application;
  public cors!: CorsConfiguration;
  public imageController!: ImagesController;
  public routeInstance: Routes;
  public imageRoutes!: cors;
  public port: Number;
  public conn!:mongoose.Connection;

  constructor() {
    App1.instance = this;
    this.port = 3000;

    this.app = express();
    this.config();
    this.SetFilesAccessible();
    this.mongoSetup();

    this.routeInstance = new Routes(this.app);
  }

  private config(): void {
    this.app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      next();
    });

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.cors = new CorsConfiguration(this.app);
    this.imageController = new ImagesController();
    this.imageRoutes = new cors();

    this.app.get("/", (req: Request, res: Response) => {
      res.send("We are home now okay done");
    });
  }

  private SetFilesAccessible() {
    this.app.use(express.static(path.join(__dirname, "..")));
    // this.app.use(express.static(path.join(__dirname,"..",'node_modules')));
    // this.app.use(express.static(path.join(__dirname,"..","public")));
  }

  private mongoSetup(): void {
    // mongoose.connect(
    //   "mongodb+srv://ritwik:mongodb12345@mycluster-rlo3b.mongodb.net/ChubDeploy",
    //   { useNewUrlParser: true, useUnifiedTopology: true },
    //   (err) => {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       console.log("Connected to Chub Deploy DB");
    //     }
    //   }
    // );

    // mongoose.connect(
    //   "mongodb+srv://test:mongodb12345@cluster0.rlo3b.mongodb.net/StressBuster",
    //   { useNewUrlParser: true, useUnifiedTopology: true,poolSize: 100 },
    //   (err) => {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       console.log("Connected to Chub Test Database");
    //     }
    //   }
    // );

    try{
      this.conn=mongoose.createConnection(process.env.DB_CONNECTION_CHUB,
      { useNewUrlParser: true, useUnifiedTopology: true});
      // this.conn.collection("UserProfile").
    }
    catch(err){
      console.log("Error")
      console.log(err);
    }    

  }
}

export default new App1().app;
