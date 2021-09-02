import React from 'react'

const Part = (props) => {
  const { part, numExercises } = props;
  return (!part || typeof part == "object") ? null : (
    <p data-testid="part">
      <span>{part}</span>: <span>{!isNaN(numExercises) ? numExercises : 0}</span> exercises
    </p>
  )
}

export default Part
