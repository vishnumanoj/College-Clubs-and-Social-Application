"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ImageModel_1 = __importDefault(require("../models/ImageModel"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = require("mongoose");
class ImagesController {
    async index(req, res) {
        await ImageModel_1.default.find({ logEntryId: req.params.log_entry_id }, (err, image) => {
            if (err)
                res.send(err);
            res.json(image);
        });
    }
    async create(req, res) {
        const remove = path_1.default.join(__dirname, "..", "..", "public");
        const relPath = req.file.path.replace(remove, "");
        const newImage = new ImageModel_1.default(req.body);
        newImage.label = req.body.label;
        newImage.logEntryId = mongoose_1.Types.ObjectId(req.params.log_entry_id);
        newImage.path = relPath;
        await newImage.save((err, image) => {
            if (err)
                res.send(err);
            res.json(image);
        });
    }
    async delete(req, res) {
        var x = await ImageModel_1.default.deleteOne({ logEntryId: req.params.logId }, (err) => {
            if (err) {
                res.send(err);
                return;
            }
        });
        res.send("Done");
    }
    async show(req, res) {
        await ImageModel_1.default.findById(mongoose_1.Types.ObjectId(req.params.id), (err, data) => {
            if (err)
                res.send(err);
            res.json(data);
        });
    }
    async update(req, res) {
        await ImageModel_1.default.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true }, (err, data) => {
            if (err)
                res.send(err);
            res.json(data);
        });
    }
}
exports.ImagesController = ImagesController;
//# sourceMappingURL=images_controller.js.map