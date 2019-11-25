
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('project_name', 256)
        .notNullable();
    tbl.string('project_description', 512);
    tbl.boolean('project_completion')
        .defaultTo(false)
        .notNullable();
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 256)
        .notNullable()
        .unique();
      tbl.string('resource_description', 512);
  })
  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.string('task_description', 256)
        .notNullable();
    tbl.string('task_notes', 512);
    tbl.boolean('task_completion')
        .defaultTo(false)
        .notNullable();
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');  
  })
  .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');  
      tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');  
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
            .dropTableIfExists('tasks')
            .dropTableIfExists('project_resources')
            .dropTableIfExists('resources')
            .dropTableIfExists('projects');
};
