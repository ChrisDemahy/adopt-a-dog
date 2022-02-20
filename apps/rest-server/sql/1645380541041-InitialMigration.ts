import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1645380541041 implements MigrationInterface {
    name = 'InitialMigration1645380541041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dog" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "adopted" boolean NOT NULL, "adoptionDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_187826f37fd8e592a5711350db1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adoptee" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "didAdopt" boolean NOT NULL, CONSTRAINT "PK_be3d04ab0d89f4202467b6dd31e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adoption" ("id" SERIAL NOT NULL, "adoptionDate" TIMESTAMP NOT NULL DEFAULT now(), "adopted" boolean NOT NULL, "adopteeId" integer, "dogId" integer, CONSTRAINT "PK_bf86d90324541b197d4ac5362a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adoption" ADD CONSTRAINT "FK_58a4d9fa01fe8bf0784b98756bc" FOREIGN KEY ("adopteeId") REFERENCES "adoptee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adoption" ADD CONSTRAINT "FK_5a5c530141ab91287ae35defdf6" FOREIGN KEY ("dogId") REFERENCES "dog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adoption" DROP CONSTRAINT "FK_5a5c530141ab91287ae35defdf6"`);
        await queryRunner.query(`ALTER TABLE "adoption" DROP CONSTRAINT "FK_58a4d9fa01fe8bf0784b98756bc"`);
        await queryRunner.query(`DROP TABLE "adoption"`);
        await queryRunner.query(`DROP TABLE "adoptee"`);
        await queryRunner.query(`DROP TABLE "dog"`);
    }

}
