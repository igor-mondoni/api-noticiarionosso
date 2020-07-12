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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/posts', 'PostController.index')
Route.post('/posts', 'PostController.store')
Route.get('/posts/:id', 'PostController.show')

// Esta rota verifica se o usuario esta cadastrado no sistema
Route.post('/auths','AuthController.store')
// Esta rota obtem os dados do usuário logado
Route.get('/auths/profile','AuthController.profile').middleware('auth')
// Esta rota registra um novo usuario
Route.post('/users','UserController.store')
Route.get('/users','UserController.index')
Route.post('/users/profile/:id','UserController.update')
Route.get('/users/permission','UserController.getPermission')


//rostas para contatos
Route.post('/contact','ContactController.store')
Route.get('/contact','ContactController.index')