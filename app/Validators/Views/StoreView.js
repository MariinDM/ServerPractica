'use strict'

const { formatters } = use('Validator')

class ViewsStoreView {
  get validateAll () {
    return true
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
  get rules () {
    return {
      name: 'required|unique:views',
      route: 'required|unique:views'
    }
  }
  get messages () {
    return {
      'name.required': 'You must provide a name.',
      'name.unique': 'This name is already registered.',
      'route.required': 'You must provide a route',
      'route.unique': 'This route is already registered.'
    }
  }
  get formatter () {
    return formatters.JsonApi
  }
}

module.exports = ViewsStoreView
