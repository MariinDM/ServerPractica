'use strict'

/*
|--------------------------------------------------------------------------
| RolSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Rol = use('App/Models/Rol')

class RolSeeder {
  async run () {
    await Rol.create({
      name:'basic',
      status:true
    })
    await Rol.create({
      name:'admin',
      status:true
    })
    await Rol.create({
      name:'support',
      status:true
    })
  }
}

module.exports = RolSeeder
