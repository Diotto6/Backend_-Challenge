"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = require("../services/comment");
class CommentController {
    async index(request, response) {
        const service = new comment_1.CommentService();
        const comment = await service.find();
        return response.json(comment);
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new comment_1.CommentService();
        const comment = await service.findOne(parseInt(id));
        return response.json(comment);
    }
    async store(request, response) {
        const { name, comment } = request.body;
        const commentService = new comment_1.CommentService();
        ;
        const dto = {
            name,
            comment
        };
        const commentCreate = await commentService.create(dto);
        return response.json(commentCreate);
    }
    async update(request, response) {
        const { id } = request.params;
        const { name, comment } = request.body;
        const commentService = new comment_1.CommentService();
        const commentUp = await commentService.update({
            id: parseInt(id),
            name,
            comment
        });
        return response.json(commentUp);
    }
    async delete(request, response) {
        const { id } = request.params;
        const commentService = new comment_1.CommentService();
        await commentService.delete(parseInt(id));
        return response.sendStatus(204);
    }
}
exports.default = CommentController;
;
