import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1647515132486 implements MigrationInterface {
    name = 'Init1647515132486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "required" ("primary-key" SERIAL NOT NULL, "create-date" TIMESTAMP NOT NULL DEFAULT now(), "update-date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e3167251a77b955fe6f0da71709" PRIMARY KEY ("primary-key"))`);
        await queryRunner.query(`CREATE TABLE "user" ("primary-key" SERIAL NOT NULL, "create-date" TIMESTAMP NOT NULL DEFAULT now(), "update-date" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "nickname" character varying NOT NULL, "avatar-image" character varying, CONSTRAINT "PK_8fc7c6d3c4707ec150b9c7bad9f" PRIMARY KEY ("primary-key"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "required"`);
    }

}
