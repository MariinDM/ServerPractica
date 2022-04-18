'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful contcategoryler for interacting with categories
 */
const Category = use('App/Models/Category')
const Database = use('Database')

class CategoryContcategoryler {
  /**
   * Show a list of all categories.
   * GET categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const dato = await Category.query()
    .with('views',(builder)=>{
      builder.where('status', true)
    })
    .fetch()

    return response.ok({
      status:true,
      data:dato
    })
  }
  async index2 ({ request, response }) {
    const category = await Database.from('categories').where({ 'status': 1 })

    return response.ok({
      status:true,
      data:category
    })
  }

  /**
   * Create/save a new category.
   * POST categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const category = await request.only(Category.visible)

    await Category.create(category)
    return response.created({
        status:true,
        data:category
    })
  }

  /**
   * Display a single category.
   * GET categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // async show ({ params, request, response }) {
  //   const category = await Category.findByOrFail({id:params.id})
  //   if(category){
  //     return response.ok({
  //       status:true,
  //       data:category
  //     })
  //   }
  //   return response.badRequest({
  //     status:false,
  //     message:'category not found'
  //   })
  // }

  /**
   * Update category details.
   * PUT or PATCH categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const category = await Category.findByOrFail({id:params.id})

    if(category){
    
      category.merge(request.only(Category.visible))

      await category.save()

      return response.ok({
        status:true,
        data:category
      })
    }
    return response.badRequest({
      status:false,
      message:'Vista No Encontrada'
    })
  }

  /**
   * Delete a category with id.
   * DELETE categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const category = await Category.findByOrFail({id:params.id})

    if(category){
      if(category.status){
      
        category.merge({status:false})
  
        await category.save()
        
        return response.ok({
          status:true,
          message:category
        })
      }
      else{
        category.merge({status:true})
  
        await category.save()
        
        return response.ok({
          status:true,
          message:category
        })
      }
    }

    return response.badRequest({
      status:false,
      message:'Error'
    })
  }
}

module.exports = CategoryContcategoryler
