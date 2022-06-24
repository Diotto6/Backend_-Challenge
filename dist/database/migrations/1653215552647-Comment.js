"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment1653215552647 = void 0;
const typeorm_1 = require("typeorm");
class Comment1653215552647 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('comment', true, true, true);
    }
}
exports.Comment1653215552647 = Comment1653215552647;
