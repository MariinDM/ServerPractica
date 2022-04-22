'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rol extends Model {
    static get visible(){
        return ['id', 'name','status']
    }
}

module.exports = Rol
