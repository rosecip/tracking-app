/* eslint-disable no-console */
import { connection } from "../boot.js"
import CycleSeeder from "./seeders/CycleSeeder.js"

class Seeder {
  static async seed() {
    
    console.log("Seeding cycles...")
    await CycleSeeder.seed()
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder