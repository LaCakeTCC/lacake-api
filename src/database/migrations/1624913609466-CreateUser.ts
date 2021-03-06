import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1624913609466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:"users",
            columns:[
                {
                    name:"id",
                    type:"varchar",
                    isPrimary: true,
                },
                {
                    name:"name",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"email",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"cpf",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"password",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"telefone",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"dataNascimento",
                    type:"timestamp",
                    isNullable: false
                }

            ]

        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         queryRunner.dropTable("users");
    }

}
