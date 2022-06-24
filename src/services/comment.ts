import { CommentRepository } from '../database/repositories/comment';
import { CommentDTO } from '../dto/comment'

export class CommentService {
    async find() {
        const repository = new CommentRepository();
        const comment = await repository.find();

        return comment;
    }

    async findOne(id: number) {
        const repository = new CommentRepository();
        const comment = await repository.findOne(id);

        return comment;
    }

    async create(commentDTO:CommentDTO) {
        const repository = new CommentRepository();
        const comment = await repository.create(commentDTO);

        return comment;
    }

    async update(commentDTO: CommentDTO) {
        const repository = new CommentRepository();
        const comment = await repository.update(commentDTO);

        return comment;
    }

    async delete(commentID: number) {
        const repository = new CommentRepository();
        await repository.delete(commentID);
    }
}