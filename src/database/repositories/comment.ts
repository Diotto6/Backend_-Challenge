import { CommentEntity } from '../entities';
import { CommentDTO } from '../../dto/comment';

export class CommentRepository {
    async find() {
        const comment = await CommentEntity.find();

        return comment;
    }

    async findOne(id: number) {
        const comment = await CommentEntity.findOne(id);
        
        return comment;
    }

    async create(commentDTO: CommentDTO) {
        const comment = await new CommentEntity(commentDTO.name, commentDTO.comment);
        comment.save();

        return comment;
    }

    async update(commentDTO: CommentDTO) {
        const comment = await CommentEntity.findOne(commentDTO.id);

        if (comment) {
            comment.name = commentDTO.name;
            comment.comment = commentDTO.comment;
            await comment.save();
        }

        return comment;
    }

    async delete(commentID: number) {
        await CommentEntity.delete(commentID);
    }
}