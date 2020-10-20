import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPost1603154259684 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"posts",
            columns:[
                {
                    name: 'id',
                    type: 'int',
                    generationStrategy: "increment",
                    isGenerated: true,
                    isPrimary: true,
                    unsigned: true
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'description',
                    type: 'text'
                },
                {
                    name: 'body',
                    type: 'text'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts')
    }

}
