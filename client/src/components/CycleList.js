import React, { useState, useEffect } from "react"
import CycleTile from "./CycleTile"

const CycleList = (props) => {
  const [cycles, setCycles] = useState([])

  const fetchCycles = async () => {
    try {
      const response = await fetch("/api/v1/cycles")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setCycles(responseBody.cycles)
    } catch (error) {
      console.log(`error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchCycles()
  }, [])

  const cycleListItems = cycles.map((cycle) => {
    return <CycleTile key={cycle.id} cycle={cycle} />
  })

  return (
    <div>
      <h1>cycles</h1>
      {cycleListItems}
    </div>
  )
}

export default CycleList