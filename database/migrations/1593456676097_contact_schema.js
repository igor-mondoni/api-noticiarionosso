'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('email', 254).notNullable()
      table.string('phone', 60).notNullable()
      table.text('message').notNullable()
      table.boolean('complete')
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
