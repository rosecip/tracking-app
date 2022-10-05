import { Cycle } from "../../models/index.js";

class CycleSeeder {
  static async seed() {
    const cycleData = [
      {
        startDate: "6/6/22",
        userId: 1,
      },
      {
        startDate: "7/6/22",
        userId: 2,
      },
      {
        startDate: "8/6/22",
        userId: 2,
      },
      {
        startDate: "9/6/22",
        userId: 2,
      },
    ];

    for (const singleCycleData of cycleData) {
      const currentCycle = await Cycle.query().findOne(singleCycleData);
      if (!currentCycle) {
        await Cycle.query().insert(singleCycleData);
      }
    }
  }
}

export default CycleSeeder;
