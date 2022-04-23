'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RolviewSchema extends Schema {
  up () {
    this.create('rol_views', (table) => {
      table.increments()
      table.integer('rol_id',25).unsigned().references('id').inTable('rols')
      table.integer('view_id',25).unsigned().references('id').inTable('views')
      table.timestamps()
    })
  }

  down () {
    this.drop('rol_views')
  }
}

module.exports = RolviewSchema
