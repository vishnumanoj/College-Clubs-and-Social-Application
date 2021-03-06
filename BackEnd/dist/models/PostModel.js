"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const app_old_1 = require("../app_old");
// import ImageModel from "./ImageModel";
const PostSchema = ts_mongoose_1.createSchema({
    //Add UUID generated by firebase here
    UserId: ts_mongoose_1.Type.objectId({ ref: "Users", required: true }),
    Caption: ts_mongoose_1.Type.string({ default: "" }),
    Images: [ts_mongoose_1.Type.string({ default: "" })],
    Videos: [ts_mongoose_1.Type.string({ default: "" })],
    PostedAt: ts_mongoose_1.Type.date({ required: true, default: Date.now }),
    ClubId: ts_mongoose_1.Type.objectId({ ref: "Clubs", required: true }),
    ClubName: ts_mongoose_1.Type.mixed({ required: true }),
    UniversityId: ts_mongoose_1.Type.mixed({}),
    UniversityName: ts_mongoose_1.Type.string({ required: true }),
});
exports.default = app_old_1.App1.instance.conn.model("Post", PostSchema);
;
//# sourceMappingURL=PostModel.js.map