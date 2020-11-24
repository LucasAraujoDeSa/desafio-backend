import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class DROPCOLUMNCATEGORYANDADDCOLUMNCATEGORYID1606229567910
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('post', 'category');

    await queryRunner.addColumn(
      'post',
      new TableColumn({
        name: 'category_id',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'post',
      new TableForeignKey({
        name: 'postCategory',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'post',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('post', 'postCategory');

    await queryRunner.dropTable('category_id');

    await queryRunner.addColumn(
      'post',
      new TableColumn({
        name: 'category',
        type: 'varchar',
      }),
    );
  }
}
