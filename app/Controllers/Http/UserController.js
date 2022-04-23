'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */

const User = use('App/Models/User')

class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const user = await User.all()
    return response.ok({
      status:true,
      data: user
    })
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const user = await request.only(User.visible)

    await User.create(user)
    return response.create({
      status:true,
      data:user
    })
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const user = await User.findByOrFail({ id: params.id })
    if (user) {
      return response.ok({
        status: true,
        data: user
      })
    }
    return response.badRequest({
      status: false,
      message: 'user not found'
    })
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const user = await User.findByOrFail({ id: params.id })

    if (user) {

      user.merge(request.only(User.visible))

      await user.save()

      return response.ok({
        status: true,
        data: user
      })
    }
    return response.badRequest({
      status: false,
      message: 'User Not Found'
    })
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const user = await User.findByOrFail({ id: params.id })

    if (user) {

      user.status = !user.status

      await user.save()

      return response.ok({
        status: true,
        message: user
      })
    }
    return response.badRequest({
      status: false,
      message: user
    })
  }
}

module.exports = UserController
