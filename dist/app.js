"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const add_blud_1 = __importDefault(require("./service/add-blud"));
const user_1 = __importDefault(require("./service/user"));
const post_blude_1 = __importDefault(require("./service/post-blude"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(add_blud_1.default);
app.use(user_1.default);
app.use(post_blude_1.default);
app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});
exports.default = app;
