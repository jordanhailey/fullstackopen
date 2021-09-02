import React from 'react'

const Total = (props) => {
  const {total} = props;

  return (typeof total == "boolean" || isNaN(Number(total))) ? null : (
    <p>
      Total number of exercises: <span className="total">{total}</span>
    </p>
  )
}

export default Total
