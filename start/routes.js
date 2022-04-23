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

use('./routes/authRoutes.js')
use('./routes/viewRoutes.js')
use('./routes/categoryRoutes.js')
use('./routes/rolRoutes.js')
use('./routes/userRoutes.js')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
}).middleware(['auth'])


