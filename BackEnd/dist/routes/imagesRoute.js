"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_old_1 = require("../app_old");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
class cors {
    constructor() {
        this.LoadCorsValues();
    }
    LoadCorsValues() {
        const storage = multer_1.default.diskStorage({
            destination: async (req, file, call) => {
                const uploadDir = path_1.default.join(__dirname, "../..", "public", "uploads", `${Date.now()}`);
                await fs_1.default.mkdir(uploadDir, { recursive: true }, (err) => {
                    if (err) {
                        console.log("File Not Creater due to : " + err?.message);
                        throw err;
                    }
                });
                call(null, uploadDir);
            },
            filename: (req, file, call) => {
                call(null, file.originalname);
            }
        });
        const upload = multer_1.default({ storage: storage, }).single("data");
        app_old_1.App1.instance.app.route('/log-entries/:log_entry_id/images')
            .get(app_old_1.App1.instance.imageController.index)
            .post(async (req, res) => {
            await upload(req, res, (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("Error");
                }
                else {
                    console.log("Saved");
                    res.status(200).send("Uploaded");
                    app_old_1.App1.instance.imageController.create;
                }
            });
        });
        app_old_1.App1.instance.app.route('/log-entries/images/:id')
            .get(app_old_1.App1.instance.imageController.show)
            .post(app_old_1.App1.instance.imageController.update);
        app_old_1.App1.instance.app.route('/log-entries/deleteImages/:logId')
            .get(app_old_1.App1.instance.imageController.delete);
    }
}
exports.cors = cors;
//# sourceMappingURL=imagesRoute.js.map