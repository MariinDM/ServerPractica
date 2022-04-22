'use strict'

/*
|--------------------------------------------------------------------------
| ViewSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const View = use('App/Models/View')

class ViewSeeder {
  async run () {
    await View.create({
      name:'Categoria',
      icon:'storage',
      level:'1',
      route:'/cate',
      status:true,
      category_id:'1',
    })
    await View.create({
      name:'Vistas',
      icon:'storage',
      level:'2',
      route:'/view',
      status:true,
      category_id:'1',
    })
    await View.create({
      name:'Asignar',
      icon:'storage',
      level:'2',
      route:'/asignar',
      status:true,
      category_id:'1',
    })
    await View.create({
      name:'Roles',
      icon:'storage',
      level:'1',
      route:'/roles',
      status:true,
      category_id:'2',
    })
    await View.create({
      name:'Usuarios',
      icon:'storage',
      level:'2',
      route:'/user',
      status:true,
      category_id:'2',
    })
    await View.create({
      name:'Prueba',
      icon:'storage',
      level:'2',
      route:'/pruebas',
      status:true,
      category_id:'2',
    })
  }
}

module.exports = ViewSeeder
