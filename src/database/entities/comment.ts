import {
    Entity,
    BaseEntity,
    Column,
    PrimaryColumn
} from "typeorm";

@Entity({ name: 'comment' })
export class CommentEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;
     
    @Column()
    name: string;

    @Column()
    comment: string;

    constructor( name: string, comment: string){
        super()
        this.name = name,
        this.comment = comment
    }
}
