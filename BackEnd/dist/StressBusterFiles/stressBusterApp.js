"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const storyRoutesSB_1 = require("./storyRoutesSB");
require("dotenv/config");
class StoryApp {
    constructor() {
        StoryApp.instance = this;
        this.port = 3000;
        this.app = express_1.default();
        this.config();
        this.mongoSetup();
        this.storyRouteInstance = new storyRoutesSB_1.StoryModelRoutes(this.app);
    }
    config() {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
            next();
        });
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    mongoSetup() {
        mongoose_1.default.connect(process.env.DB_CONNECTION_SB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log("Connected to StressBuster DB");
            }
        });
    }
}
exports.StoryApp = StoryApp;
exports.default = new StoryApp().app;
//# sourceMappingURL=stressBusterApp.js.map