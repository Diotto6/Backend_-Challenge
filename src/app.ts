import express from 'express';
import cors from 'cors';

import Database from './database/connections/Database';
import Routers from './routers/comment';

export default class Application {
    readonly #express: express.Application;


    constructor() {
        this.#express = express();
    }

    async init() {        
        this.config();
        this.middlewares();
        this.routers();
        await this.database();
       
    }

    start(port: number){
        this.#express.listen(port, () => {
            console.log(`A aplicação está rodando na porta ${port}...`); 
        });
    }


    private config() {
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: false }));
        this.#express.use(cors());
    }

    private middlewares() {
        // TODO
    }

    private routers() {

        const CommentRouter = new Routers().init();
        this.#express.use(CommentRouter);
    }

    private async database() {
        await Database.getInstance();
    }
};