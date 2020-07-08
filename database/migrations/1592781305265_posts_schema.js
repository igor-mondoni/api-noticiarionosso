'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title', 254).notNullable().unique()
      table.string('subtitle', 254).notNullable()
      table.text('post').notNullable()
      table.string('category', 254).notNullable()
      table.string('flag', 50)
      table.string('photo_url', 254)
      table.string('created_by', 254)
      table.string('updated_by', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
