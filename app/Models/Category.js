'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
    static get visible(){
        return ['name','icon','level','options','status']
    }
    
    views () {
        return this.hasMany('App/Models/View')
    }
}

module.exports = Category
