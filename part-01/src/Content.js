import React from 'react'

const Content = (props) => {
  const { part, numExercises } = props;
  return (!part || typeof part == "object") ? null : (
    <div>
      <div className="part">
        <span>Part:</span>
        <span>{part}</span>
      </div>
      <div className="exercises">
        <span>Exercises:</span>
        <span>{!isNaN(numExercises) ? numExercises : 0}</span>
      </div>
    </div>
  )
}

export default Content
