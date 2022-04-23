'use strict'

/*
|--------------------------------------------------------------------------
| RolViewSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const RolView = use('App/Models/RolView')

class RolViewSeeder {
  // SUPPORT
  async run() {
    await RolView.create({
      rol_id: 2,
      view_id: 1
    })
    await RolView.create({
      rol_id: 2,
      view_id: 2
    })
    await RolView.create({
      rol_id: 2,
      view_id: 3
    })
    await RolView.create({
      rol_id: 2,
      view_id: 4
    })
    await RolView.create({
      rol_id: 2,
      view_id: 5
    })
    // ADMIN
    await RolView.create({
      rol_id: 3,
      view_id: 4
    })
    await RolView.create({
      rol_id: 3,
      view_id: 5
    })
  }
}

module.exports = RolViewSeeder
