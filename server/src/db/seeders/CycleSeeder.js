import { Cycle } from "../../models/index.js";

class CycleSeeder {
  static async seed() {
    const cycleData = [
      {
        startDay: "16",
        startMonth: "04",
        startYear: "22",
        userId: 1,
      },
      {
        startDay: "18",
        startMonth: "05",
        startYear: "22",
        userId: 1,
      },
      {
        startDay: "13",
        startMonth: "06",
        startYear: "22",
        userId: 1,
      },
      {
        startDay: "18",
        startMonth: "07",
        startYear: "22",
        userId: 1,
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
