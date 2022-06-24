import { Request, Response } from 'express';
import { CommentService } from '../services/comment';
import { CommentDTO } from '../dto/comment';

export default class CommentController {
    async index(request: Request, response: Response) {
        const service = new CommentService();
        const comment = await service.find();       

        return response.json(comment);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new CommentService();
        const comment = await service.findOne(parseInt(id));
        
        return response.json(comment);
    }

    async store(request: Request, response: Response) {
        const { name, comment } = request.body;
        const commentService = new CommentService();;
        const dto: CommentDTO = {
            name,
            comment
        };


        const commentCreate = await commentService.create(dto);

        return response.json(commentCreate);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, comment } = request.body;
        const commentService = new CommentService();
        const commentUp = await commentService.update({
            id: parseInt(id),
            name,
            comment
        });

        return response.json(commentUp);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const commentService = new CommentService();
        await commentService.delete(parseInt(id));

        return response.sendStatus(204);
    }
};
