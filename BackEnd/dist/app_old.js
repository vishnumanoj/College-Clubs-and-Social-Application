"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes/routes");
const path_1 = __importDefault(require("path"));
const cors_config_1 = require("./cors_config");
const images_controller_1 = require("./controllers/images_controller");
const imagesRoute_1 = require("./routes/imagesRoute");
require("dotenv/config");
class App1 {
    constructor() {
        App1.instance = this;
        this.port = 3000;
        this.app = express_1.default();
        this.config();
        this.SetFilesAccessible();
        this.mongoSetup();
        this.routeInstance = new routes_1.Routes(this.app);
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
        this.cors = new cors_config_1.CorsConfiguration(this.app);
        this.imageController = new images_controller_1.ImagesController();
        this.imageRoutes = new imagesRoute_1.cors();
        this.app.get("/", (req, res) => {
            res.send("We are home now okay done");
        });
    }
    SetFilesAccessible() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "..")));
        // this.app.use(express.static(path.join(__dirname,"..",'node_modules')));
        // this.app.use(express.static(path.join(__dirname,"..","public")));
    }
    mongoSetup() {
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
        try {
            this.conn = mongoose_1.default.createConnection(process.env.DB_CONNECTION_CHUB, { useNewUrlParser: true, useUnifiedTopology: true });
            // this.conn.collection("UserProfile").
        }
        catch (err) {
            console.log("Error");
            console.log(err);
        }
    }
}
exports.App1 = App1;
exports.default = new App1().app;
//# sourceMappingURL=app_old.js.map