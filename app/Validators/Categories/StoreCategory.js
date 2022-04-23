'use strict'

const { formatters } = use('Validator')

class CategoriesStoreCategory {
  get validateAll () {
    return true
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
  get rules () {
    return {
      name: 'required|unique:categories',
      icon: 'required',
      level: 'required',
    }
  }
  get messages () {
    return {
      'name.required': 'You must provide a name.',
      'name.unique': 'This name is already registered.',
      'icon.required': 'You must provide a icon.',
      'level.requires': 'You must provide a level.'
    }
  }
  get formatter () {
    return formatters.JsonApi
  }
}

module.exports = CategoriesStoreCategory
