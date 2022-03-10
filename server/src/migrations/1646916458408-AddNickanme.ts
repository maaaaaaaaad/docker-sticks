import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNickanme1646916458408 implements MigrationInterface {
    name = 'AddNickanme1646916458408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user-name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "nickname" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nickname"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user-name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
    }

}
