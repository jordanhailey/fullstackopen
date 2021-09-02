import React from 'react'

const Header = (props) => {
  const {course} = props;

  return (
    typeof course == "string" && <div>{course}</div>
  )
}

export default Header
