import React from 'react'

const Total = (props) => {
  const {total} = props;

  return (typeof total == "boolean" || isNaN(Number(total))) ? null : (
    <div>
      <span>Total:</span>
      <span>{total}</span>
    </div>
  )
}

export default Total
