import { Response, Request } from "express";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { StoryModelRoutes } from "./storyRoutesSB";
import "dotenv/config";
import path from "path";
import jwt from "jsonwebtoken";

export class StoryApp {
  public static instance: StoryApp;
  public app: express.Application;
  public port: Number
  public storyRouteInstance: StoryModelRoutes;


  constructor() {
    StoryApp.instance = this;
    this.port = 3000;

    this.app = express();
    this.config();
    this.mongoSetup();

    this.storyRouteInstance = new StoryModelRoutes(this.app);
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
  }

  private mongoSetup(): void {
    mongoose.connect(
      process.env.DB_CONNECTION_SB,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Connected to StressBuster DB");
        }
      }
    );
  }
}

export default new StoryApp().app;