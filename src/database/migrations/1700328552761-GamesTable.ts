import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class GamesTable1700328552761 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "games",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "100",
                    isNullable: false
                },
                {
                    name: "producer",
                    type: "varchar",
                    length: "100",
                    isNullable: false
                },
                {
                    name: "category",
                    type: "varchar",
                    length: "100",
                    isNullable: false
                },
                {
                    name: "price",
                    type: "int",
                    length: "100",
                    isNullable: false
                },
                {
                    name: "imageUrl",
                    type: "varchar",
                    length: "100",
                    isNullable: true
                },
                {
                    name: "description",
                    type: "varchar",
                    length: "500",
                    isNullable: false
                },
                {
                    name: "releaseDate",
                    type: "date",
                    isNullable: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("games");
    }

}
