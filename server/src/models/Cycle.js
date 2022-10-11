const Model = require("./Model");

class Cycle extends Model {
  static get tableName() {
    return "cycles";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["startDay", "startMonth", "startYear"],
      properties: {
        startDay: { type: "string" },
        startMonth: { type: "string" },
        startYear: { type: "string" }
      },
    };
  }

  static get relationMappings() {
    const User = require("./index.js")
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "cycles.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Cycle
