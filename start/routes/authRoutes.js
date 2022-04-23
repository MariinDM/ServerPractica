'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(function(){
    Route.post('register','AuthController.register').validator('Auth/StoreAuth')
    Route.post('login','AuthController.login')
    Route.get('get/user', 'AuthController.getUser').middleware(['auth'])
    Route.post('logout','AuthController.logout').middleware(['auth'])
    Route.post('sesion', 'AuthController.session')
    Route.post('change2/password','AuthController.changePassword2').middleware(['auth'])
    Route.post('change1/password','AuthController.changePassword1')
}).prefix('api/v1/user')
