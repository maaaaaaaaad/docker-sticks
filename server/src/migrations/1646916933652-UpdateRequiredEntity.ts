import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateRequiredEntity1646916933652 implements MigrationInterface {
    name = 'UpdateRequiredEntity1646916933652'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "required" DROP CONSTRAINT "PK_33273d2f78fca653f844c4e10d0"`);
        await queryRunner.query(`ALTER TABLE "required" DROP COLUMN "pk"`);
        await queryRunner.query(`ALTER TABLE "required" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "required" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_3eb3660cb383b92582d5c3ecec2"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "pk"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "required" ADD "primary-key" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "required" ADD CONSTRAINT "PK_e3167251a77b955fe6f0da71709" PRIMARY KEY ("primary-key")`);
        await queryRunner.query(`ALTER TABLE "required" ADD "create-date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "required" ADD "update-date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "primary-key" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_8fc7c6d3c4707ec150b9c7bad9f" PRIMARY KEY ("primary-key")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "create-date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "update-date" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "update-date"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "create-date"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_8fc7c6d3c4707ec150b9c7bad9f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "primary-key"`);
        await queryRunner.query(`ALTER TABLE "required" DROP COLUMN "update-date"`);
        await queryRunner.query(`ALTER TABLE "required" DROP COLUMN "create-date"`);
        await queryRunner.query(`ALTER TABLE "required" DROP CONSTRAINT "PK_e3167251a77b955fe6f0da71709"`);
        await queryRunner.query(`ALTER TABLE "required" DROP COLUMN "primary-key"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "pk" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_3eb3660cb383b92582d5c3ecec2" PRIMARY KEY ("pk")`);
        await queryRunner.query(`ALTER TABLE "required" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "required" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "required" ADD "pk" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "required" ADD CONSTRAINT "PK_33273d2f78fca653f844c4e10d0" PRIMARY KEY ("pk")`);
    }

}
