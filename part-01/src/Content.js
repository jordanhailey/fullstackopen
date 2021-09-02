import React from 'react'

const Content = (props) => {
  const { part, numExercises } = props;
  return (!part || typeof part == "object") ? null : (
    <p>
      <span className="part">{part}</span>: <span className="exercises">{!isNaN(numExercises) ? numExercises : 0}</span> exercises
    </p>
  )
}

export default Content
