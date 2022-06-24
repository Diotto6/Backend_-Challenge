"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_1 = __importDefault(require("../controllers/comment"));
class Routers {
    init() {
        const router = (0, express_1.Router)();
        const controller = new comment_1.default;
        router.get('/comment', controller.index);
        router.get('/comment/:id', controller.show);
        router.post('/comment', controller.store);
        router.put('/comment/:id', controller.update);
        router.delete('/comment/:id', controller.delete);
        return router;
    }
}
exports.default = Routers;
