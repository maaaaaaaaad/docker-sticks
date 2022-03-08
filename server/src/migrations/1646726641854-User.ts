import {MigrationInterface, QueryRunner} from "typeorm";

export class User1646726641854 implements MigrationInterface {
    name = 'User1646726641854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "required" ("pk" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_33273d2f78fca653f844c4e10d0" PRIMARY KEY ("pk"))`);
        await queryRunner.query(`CREATE TABLE "user" ("pk" SERIAL NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_3eb3660cb383b92582d5c3ecec2" PRIMARY KEY ("pk"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "required"`);
    }

}
