'use strict'

const { formatters } = use('Validator')

class AuthStoreAuth {
  get validateAll () {
    return true
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
  get rules () {
    return {
      email: 'required|unique:users',
      username: 'required|unique:users',
      password: 'required',
      role_id: 'required',
    }
  }
  get messages () {
    return {
      'email.required': 'You must provide a email.',
      'email.unique': 'This email is already registered.',
      'username.required': 'You must provide a username',
      'username.unique': 'This username is already registered.',
      'password.required': 'You must provide a password.',
      'role_id.required': 'You must provide a rol.'
    }
  }
  get formatter () {
    return formatters.JsonApi
  }
}

module.exports = AuthStoreAuth
