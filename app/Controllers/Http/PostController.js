'use strict'

const Post = use('App/Models/Post')

class PostController {

    async index() {
        return await Post.all()
    }

    async store ({ request }){
        const data = request.only(['title','subtitle','post'])
    
        const post = await Post.create(data)
    
        return post
      }
    
      async update({ params, request, response }){

        const post = await Post.findOrFail(params.id)
    
        const data = request.only(['name','email','message'])
    
        post.merge(data)
    
        await post.save()
    
        return post
    }

    async show({ params }){
        const post = await Post.findOrFail(params.id)
  
        return post
    }
    
    async destroy({ params, auth, response}){
        const post = await Post.findOrFail(params.id)
  
        await post.delete()
    }
}

module.exports = PostController
