"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
class CorsConfiguration {
    constructor(app) {
        this.app = app;
        this.SetCorsConfiguration();
    }
    SetCorsConfiguration() {
        // const corsOption:CorsOptions ={
        //     origin : (origin,callback)=>{
        //         if(process.env.CORS_WHITELIST?.toString()?.split(' ').indexOf(origin as string) !=-1 &&  false){
        //             callback(null,true);
        //         }
        //         else{
        //             callback(new Error('Not allowed by Cors Configuration'));
        //         }
        //     },methods : ""
        // };
        const publicOptions = {
            origin: (origin, callback) => {
                callback(null, true);
            },
            methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
        };
        // this.app.options(cors(corsOption));
        // this.app.use("../",cors(corsOption));
        this.app.use("../", cors_1.default(publicOptions));
        // this.app.options('./',cors(publicOptions));
        // this.app.use(cors(publicOptions));
    }
}
exports.CorsConfiguration = CorsConfiguration;
//# sourceMappingURL=cors_config.js.map