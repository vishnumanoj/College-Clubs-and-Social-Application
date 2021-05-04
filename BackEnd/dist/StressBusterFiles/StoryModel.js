"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const StorySchema = ts_mongoose_1.createSchema({
    storyNo: ts_mongoose_1.Type.number({ required: true }),
    character1: ts_mongoose_1.Type.string({ required: true }),
    character2: ts_mongoose_1.Type.string({ required: true }),
    c1: ts_mongoose_1.Type.string({ required: true }),
    c2: ts_mongoose_1.Type.string({ required: true }),
});
const StoryModel = ts_mongoose_1.typedModel('stories', StorySchema, undefined, undefined, {
    help: () => {
        return null;
    }
});
exports.default = StoryModel;
//# sourceMappingURL=StoryModel.js.map