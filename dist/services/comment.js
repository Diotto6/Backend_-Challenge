"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const comment_1 = require("../database/repositories/comment");
class CommentService {
    async find() {
        const repository = new comment_1.CommentRepository();
        const comment = await repository.find();
        return comment;
    }
    async findOne(id) {
        const repository = new comment_1.CommentRepository();
        const comment = await repository.findOne(id);
        return comment;
    }
    async create(commentDTO) {
        const repository = new comment_1.CommentRepository();
        const comment = await repository.create(commentDTO);
        return comment;
    }
    async update(commentDTO) {
        const repository = new comment_1.CommentRepository();
        const comment = await repository.update(commentDTO);
        return comment;
    }
    async delete(commentID) {
        const repository = new comment_1.CommentRepository();
        await repository.delete(commentID);
    }
}
exports.CommentService = CommentService;
