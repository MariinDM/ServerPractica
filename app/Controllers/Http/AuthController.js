'use strict'
const User = use('App/Models/User')
const { validate } = use('Validator')
const Database = use('Database')

class AuthController {
    async login ({request, response, auth}){
        
        const {email, password} = request.only(User.visible)

        const emaildb = Database.table('users').where({email:email})
        if(emaildb){
            const token = await auth.withRefreshToken().attempt(email,password,{
                expiredIn:'8hours'
            })
    
            return response.ok({token})
        }

        return response.badRequest({
            status:false,
            message:'Email No Encontrado'
        })
        
    }
    async register ({request, response}){
        const rules = {
            username: 'required|unique:users,username',
            email: 'required|email|unique:users,email',
            password: 'required',
            role_id: 'required'
        }
        const user = await request.only(User.visible)
        
        const validation = await validate(user, rules)

        if (validation.fails()) {

            return validation.messages()
        }

        await User.create(user)
        return response.created({
            status:true,
            data:user
        })
    }
    async changePassword({request, response, params}){
        const validateEmail = await User.find(params.id)

        if(validateEmail){
            return response.ok({
                status:true,
                message:'Prueba Correcta'
            })
        }
        return response.basRequest({
            status:false,
            message:'Prueba Fallida'
        })
    }

    async logout({auth, response}){
        await auth.logout()
        return response.ok({
            status:true,
            message:'Sesion Cerrada'
        })
    }
}

module.exports = AuthController
