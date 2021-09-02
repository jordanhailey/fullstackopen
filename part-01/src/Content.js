import React from 'react';
import Part from './Part';

const Content = (props) => {
  const { parts } = props;
  return (!Array.isArray(parts) || !parts.length) ? null : (
    <div data-testid={"content"}>
      {
        parts.map((p,i) => {
          const {part,exercises} = p;
          return <Part key={i} part={part} numExercises={exercises} />
        })
      }
    </div>
  )
}

export default Content
