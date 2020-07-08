'use strict'

const Contact = use('App/Models/Contact')

class ContactController {
    async index() {
        return await Contact.all()
    }

    async store ({ request }){
        const data = request.only(['name','email','phone','message'])
    
        const post = await Contact.create(data)
    
        return post
      }
    
      async update({ params, request, response }){

        const post = await Contact.findOrFail(params.id)
    
        const data = request.only(['name','email','message'])
    
        post.merge(data)
    
        await post.save()
    
        return post
    }

    async show({ params }){
        const post = await Contact.findOrFail(params.id)
  
        return post
    }
    
    async destroy({ params, auth, response}){
        const post = await Contact.findOrFail(params.id)
  
        await post.delete()
    }
}

module.exports = ContactController
