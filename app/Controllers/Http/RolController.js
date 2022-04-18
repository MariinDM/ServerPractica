'use strict'

const Rol = use('App/Models/Rol')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/Rol')} Rol */

/**
 * Resourceful controller for interacting with rols
 */
class RolController {
  /**
   * Show a list of all rols.
   * GET rols
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Rol} ctx.rol
   */
  async index ({ request, response }) {
    const rol = await Rol.all()
    return response.ok({
      status:true,
      data:rol
    })
    
  }

  /**
   * Create/save a new rol.
   * POST rols
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const rol = await request.only(Rol.visible)

    await Rol.create(rol)
    return response.created({
        status:true,
        data:rol
    })
  }

  /**
   * Display a single rol.
   * GET rols/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Rol} ctx.rol
   */
  async show ({ params, request, response }) {
    const rol = await Rol.findByOrFail({id:params.id})
    if(rol){
      return response.ok({
        status:true,
        data:rol
      })
    }
    return response.badRequest({
      status:false,
      message:'Rol not found'
    })
  }

  /**
   * Update rol details.
   * PUT or PATCH rols/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const rol = await Rol.findByOrFail({id:params.id})

    if(rol){
    
      rol.merge(request.only(Rol.visible))

      await rol.save()

      return response.ok({
        status:true,
        data:rol
      })
    }
    return response.badRequest({
      status:false,
      message:'Vista No Encontrada'
    })
  }

  /**
   * Delete a rol with id.
   * DELETE rols/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const rol = await Rol.findByOrFail({id:params.id})

    if(rol){
      if(rol.status){
      
        rol.merge({status:false})
  
        await rol.save()
        
        return response.ok({
          status:true,
          message:rol
        })
      }
      else{
        rol.merge({status:true})
  
        await rol.save()
        
        return response.ok({
          status:true,
          message:rol
        })
      }
    }

    return response.badRequest({
      status:false,
      message:'Error'
    })
  }
}

module.exports = RolController
