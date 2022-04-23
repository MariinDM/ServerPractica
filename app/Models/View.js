'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class View extends Model {
    static get visible() {
        return ['id', 'name', 'icon', 'level', 'route', 'status', 'category_id']
    }

    static get table() {
        return 'views';
    };

    static get primaryKey() {
        return 'id';
    };
    
    rol() {
        return this.belongsToMany('App/Models/Rol', 'view_id', 'rol_id', 'id', 'id')
            .pivotTable('rol_views')
    }
    category() {
        return this.belongsTo('App/Models/Category', 'category_id', 'id');
    };
}

module.exports = View
