'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class View extends Model {
    static get visible(){
        return ['id', 'name','icon','level','route','status','category_id']
    }
}

module.exports = View
