/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("cycles", (table) => {
    table.bigIncrements("id").notNullable()
    table.string("startDay").notNullable()
    table.string("startMonth").notNullable()
    table.string("startYear").notNullable()
    table.bigInteger("userId").unsigned().index().notNullable().references("users.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("cycles")
}
