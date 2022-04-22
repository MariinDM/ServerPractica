'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
    static get visible(){
        return ['id','name','icon','level','status']
    }
    
    views () {
        return this.hasMany('App/Models/View')
    }
}

module.exports = Category
