"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostModel_1 = __importDefault(require("../models/PostModel"));
require("dotenv/lib/env-options");
require("mongoose");
class Routes {
    constructor(app) {
        this.app = app;
        this.launchRoutes();
    }
    launchRoutes() {
        this.app.route('/post').get(this.CheckPostsPage);
        this.app.route('/post').post(this.AddTestData);
    }
    CheckPostsPage(req, res) {
        res.send("We are on posts now, okay");
    }
    async AddTestData(req, res) {
        let post = new PostModel_1.default(req.body);
        await post.save((err, data) => {
            if (err)
                res.send(err);
            res.json(data);
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map