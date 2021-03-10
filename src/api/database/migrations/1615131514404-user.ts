import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class user1615131514404 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            generationStrategy: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'senha',
            type: 'varchar',
          },
          {
            name: 'telefone',
            type: 'bigint',
          },
          {
            name: 'idade',
            type: 'integer',
          },
          {
            name: 'peso',
            type: 'integer',
          },
          {
            name: 'etinia',
            type: 'enum',
            enum: ['branco', 'preto', 'amarela', 'indigina', 'pardo'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
