'use strict'

const User = use('App/Models/User')

class UserController {
    async index() {
        return await User.all()
    }

    async store ({ request }){
        const data = request.only(['completename', 'email','password', 'username', 'doc_number', 'address1', 'address2', 'birth_date', 'usertype'])
    
        const user = await User.create(data)
    
        return user
      }
    
      async update({ params, request, response }){

        const user = await User.findOrFail(params.id)
    
        const data = request.only(['completename', 'email','password', 'username', 'doc_number', 'address1', 'address2', 'birth_date'])
    
        user.merge(data)
    
        await user.save()
    
        return user
    }

    async show({ params }){
        const user = await User.findOrFail(params.id)
  
        return user
    }
    
    async destroy({ params, auth, response}){
        const user = await User.findOrFail(params.id)
  
        await user.delete()
    }
}

module.exports = UserController
