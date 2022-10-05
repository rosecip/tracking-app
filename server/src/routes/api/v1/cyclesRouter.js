import express from 'express'
import Cycle from "../../../models/Cycle.js"

const cyclesRouter = new express.Router()

cyclesRouter.get("/", async (req, res) => {
  try {
    const cycles = await Cycle.query()
    res.status(200).json({ cycles })
  } catch (error) {
    res.status(500).json({ error})
  }
})

export default cyclesRouter