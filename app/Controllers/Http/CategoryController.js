'use strict'

const Category = use('App/Models/Category')

class CategoryController {

    async index() {
        return await Category.all()
    }

    async store ({ request }){
        const data = request.only(['title','subtitle','post','category'])
    
        const category = await Category.create(data)
    
        return category
      }
    
      async update({ params, request, response }){

        const category = await Category.findOrFail(params.id)
    
        const data = request.only(['name','email','message'])
    
        category.merge(data)
    
        await category.save()
    
        return category
    }

    async show({ params }){
        const category = await Category.findOrFail(params.id)
  
        return category
    }
    
    async destroy({ params, auth, response}){
        const category = await Category.findOrFail(params.id)
  
        await category.delete()
    }
}

module.exports = CategoryController
