'use strict'

const View = use('App/Models/View')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with views
 */
class ViewController {
  /**
   * Show a list of all views.
   * GET views
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response}) {
    const view = await View.all()
    return response.ok({
      status:true,
      data:view
    })
  }

  /**
   * Create/save a new view.
   * POST views
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const ViewData = await request.only(View.visible)

    await View.create(ViewData)
    return response.created({
        status:true,
        data:ViewData
    })
  }

  /**
   * Display a single view.
   * GET views/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response}) {
    const view = await View.findByOrFail({id:params.id})
    if(view){
      return response.ok({
        status:true,
        data:view
      })
    }
    return response.badRequest({
      status:false,
      message:'View not found'
    })
  }

  /**
   * Update view details.
   * PUT or PATCH views/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const view = await View.findByOrFail({id:params.id})

    if(view){
    
      view.merge(request.only(View.visible))

      await view.save()

      return response.ok({
        status:true,
        data:view
      })
    }
    return response.badRequest({
      status:false,
      message:'Vista No Encontrada'
    })
  }

  /**
   * Delete a view with id.
   * DELETE views/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const view = await View.findByOrFail({id:params.id})

    if(view){
      if(view.status){
      
        view.merge({status:false})
  
        await view.save()
        
        return response.ok({
          status:true,
          message:view
        })
      }
      else{
        view.merge({status:true})
  
        await view.save()
        
        return response.ok({
          status:true,
          message:view
        })
      }
    }

    return response.badRequest({
      status:false,
      message:'Error'
    })
  }
}

module.exports = ViewController
