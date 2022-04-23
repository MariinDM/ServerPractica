'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rol extends Model {

    static get visible() {
        return ['id', 'name', 'status']
    }

    static get table() {
        return 'rols'
    }

    static get primaryKey() {
        return 'id'
    }

    user() {
        return this.hasMany('App/Models/User', 'id', 'role_id')
    }

    // view() {
    //     return this.belongsToMany('App/Models/View', 'rol_id', 'view_id', 'id', 'id')
    //         .pivotTable('rol_views')
    // }
}

module.exports = Rol
