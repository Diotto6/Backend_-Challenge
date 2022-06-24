import { Router } from "express";
import CommentController from "../controllers/comment";

export default class Routers {
    init() {
        const router = Router();
        const controller = new CommentController;

        router.get('/comment', controller.index)
        router.get('/comment/:id', controller.show);
        router.post('/comment', controller.store);
        router.put('/comment/:id', controller.update);
        router.delete('/comment/:id', controller.delete);
     
        return router;
    }
}