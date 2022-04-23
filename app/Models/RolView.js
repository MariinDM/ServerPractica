'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RolView extends Model {

    static get visible() {
        return ['id', 'rol_id', 'view_id']
    }

    static get table() {
        return 'rol_views';
    };


    static get primaryKey() {
        return 'id';
    };

    rol() {
        return this.belongsTo('App/Models/Rol', 'rol_id', 'id');
    };
}

module.exports = RolView
