'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('icon', 80).notNullable()
      table.string('level', 80).notNullable()
      table.boolean('status').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
