'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Category = use('App/Models/Category')

class CategorySeeder {
  async run () {
    await Category.create({
      name:'Categoria',
      icon:'category',
      level:'1',
      status:true
    })
    await Category.create({
      name:'Usuarios',
      icon:'person',
      level:'2',
      status:true
    })
    await Category.create({
      name:'Reportes',
      icon:'note',
      level:'3',
      status:true
    })
  }
}

module.exports = CategorySeeder
