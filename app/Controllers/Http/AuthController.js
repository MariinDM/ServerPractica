'use strict'
const User = use('App/Models/User')
const { validate } = use('Validator')
const Database = use('Database')

class AuthController {

    async login({ request, response, auth }) {

        const { email, password } = request.only(User.visible)

        const emaildb = Database.table('users').where({ email: email })
        if (emaildb) {
            const token = await auth.withRefreshToken().attempt(email, password, {}, { expiresIn: '3600000' })

            return response.ok({ token })
        }

        return response.badRequest({
            status: false,
            message: 'Email No Encontrado'
        })

    }
    async register({ request, response, auth }) {

        const user = await request.only(User.visible)

        await User.create(user)

        const token = await auth.withRefreshToken().attempt(user.email, user.password, {}, { expiresIn: '3600000' })

        return response.created({
            status: true,
            data: user,
            token: token
        })
    }
    async changePassword1({ request, response, auth }) {

        const { email, password } = request.only(User.visible)

        const validateEmail = await User.findBy('email', email)

        if (validateEmail) {

            validateEmail.password = password

            validateEmail.save()

            return response.ok({
                status: true,
                data: validateEmail
            })
        }
        return response.badRequest({
            status: false,
            data: 'Email not Found'
        })
    }
    async changePassword2({ request, response, auth }) {

        const user = auth.user

        const { password } = await request.only(User.visible)

        user.password = password

        user.save()

        return response.ok({
            status: true,
            data: user
        })
    }
    async logout({ request, auth, response }) {
        // await auth.logout()
        // return response.ok({
        //     status:true,
        //     message:'Sesion Cerrada'
        // })
        await auth.check();
        await auth.revokeTokens([request.input('refresh_token')], true);
    }
    async getUser({ request, auth, response }) {
        try {
            const user = await auth.getUser();
            return response.ok({
                status: true,
                data: user
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: error
            })
        }
    }
    async session({ auth, request, response }) {
        try {
            const refreshToken = request.input('refresh_token')
            const token = await auth.generateForRefreshToken(refreshToken, true)
            console.log('refreshToken', token.refreshToken)
            return token
        }
        catch (e) {
            console.log(e)
        }
    }
}

module.exports = AuthController
