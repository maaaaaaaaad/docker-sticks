import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAvatarImageColumn1646980494435 implements MigrationInterface {
    name = 'CreateAvatarImageColumn1646980494435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "avatar-image" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "avatar-image"`);
    }

}
