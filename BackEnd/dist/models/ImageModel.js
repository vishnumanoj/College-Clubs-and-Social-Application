"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_old_1 = require("../app_old");
const ts_mongoose_1 = require("ts-mongoose");
const ImageSchema = ts_mongoose_1.createSchema({
    logEntryId: ts_mongoose_1.Type.objectId({ required: true }),
    path: ts_mongoose_1.Type.string({ required: true }),
    label: ts_mongoose_1.Type.string({ required: true }),
    createdAt: ts_mongoose_1.Type.date({ required: true, default: Date.now })
});
ImageSchema.virtual("something").get(() => {
    console.log("Hello");
});
const ImageModel = ts_mongoose_1.typedModel("Images", ImageSchema, undefined, undefined, {
    hey: function (name) {
        return this.find({ name });
    },
    hi: meth,
}, app_old_1.App1.instance.conn);
function meth() {
}
exports.default = ImageModel;
//# sourceMappingURL=ImageModel.js.map