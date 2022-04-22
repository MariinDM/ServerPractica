'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await User.create({
      username:'support',
      email:'support@support.com',
      password:'123456789',
      role_id:2,
      status:true
    })
    await User.create({
      username:'empleado',
      email:'empleado@empleado.com',
      password:'123456789',
      role_id:3,
      status:true
    })
    await User.create({
      username:'invitado',
      email:'invitado@invitado.com',
      password:'123456789',
      role_id:1,
      status:true
    })
  }
}

module.exports = UserSeeder
