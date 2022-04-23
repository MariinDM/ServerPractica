'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
    
    static get visible() {
        return ['id', 'name', 'icon', 'level', 'status']
    }

    static get table() {
        return 'categories';
    };

    static get primaryKey() {
        return 'id';
    };

    views() {
        return this.hasMany('App/Models/View', 'id', 'category_id')
    }

}

module.exports = Category
