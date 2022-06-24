import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Comment1653215552647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
            name: 'comment',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'comment',
                    type: 'varchar',
                    isNullable: true
                }
            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comment', true, true, true)
    }

}
