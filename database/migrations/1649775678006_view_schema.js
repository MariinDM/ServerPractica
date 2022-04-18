'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ViewSchema extends Schema {
  up () {
    this.create('views', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('icon', 80).notNullable()
      table.string('level', 80).notNullable()
      table.string('route', 80).notNullable().unique()
      table.boolean('status').defaultTo(true)
      table.integer('category_id',25).unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('views')
  }
}

module.exports = ViewSchema
