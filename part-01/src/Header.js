import React from 'react'

const Header = (props) => {
  const {course} = props;

  return (
    typeof course == "string" && <h1>{course}</h1>
  )
}

export default Header
