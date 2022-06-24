"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = void 0;
const entities_1 = require("../entities");
class CommentRepository {
    async find() {
        const comment = await entities_1.CommentEntity.find();
        return comment;
    }
    async findOne(id) {
        const comment = await entities_1.CommentEntity.findOne(id);
        return comment;
    }
    async create(commentDTO) {
        const comment = await new entities_1.CommentEntity(commentDTO.name, commentDTO.comment);
        comment.save();
        return comment;
    }
    async update(commentDTO) {
        const comment = await entities_1.CommentEntity.findOne(commentDTO.id);
        if (comment) {
            comment.name = commentDTO.name;
            comment.comment = commentDTO.comment;
            await comment.save();
        }
        return comment;
    }
    async delete(commentID) {
        await entities_1.CommentEntity.delete(commentID);
    }
}
exports.CommentRepository = CommentRepository;
