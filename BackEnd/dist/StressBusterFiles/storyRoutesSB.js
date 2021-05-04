"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StoryModel_1 = __importDefault(require("./StoryModel"));
// import '../Old Models And Routes/routes/node_modules/dotenv/lib/env-options';
require("mongoose");
//Stress Buster Routing
class StoryModelRoutes {
    constructor(app) {
        this.app = app;
        this.launchRoutes();
    }
    launchRoutes() {
        this.app.route('/university/:storyNo').get(this.GetStoryData);
    }
    //Stress buster Routing
    async GetStoryData(req, res) {
        await StoryModel_1.default.findOne({ storyNo: (Number)(req.params.storyNo) }, (err, data) => {
            if (err)
                res.send(err);
            res.send(data);
            // console.log(data?.c1);
            // console.log(data)
        });
    }
}
exports.StoryModelRoutes = StoryModelRoutes;
//# sourceMappingURL=storyRoutesSB.js.map