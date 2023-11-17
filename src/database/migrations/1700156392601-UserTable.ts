import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UserTable1700156392601 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "googleId",
                    type: "varchar",
                    length: '100',
                    isNullable: true,
                },
                {
                    name: "firstName",
                    type: "varchar",
                    length: '50'
                },
                {
                    name: "lastName",
                    type: "varchar",
                    length: '50'
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true,
                    length: '100'
                },
                {
                    name: "password",
                    type: "varchar",
                    length: '300'
                },
                {
                    name: "emailConfirmed",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "emailConfirmationToken",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "phone",
                    type: "varchar",
                    isNullable: true,
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
