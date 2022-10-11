import React from 'react'

const CycleTile = (props) => {
  return (
    <div>
      <h1>{props.cycle.startMonth}/{props.cycle.startDay}/{props.cycle.startYear}</h1>
    </div>
  )
}

export default CycleTile