import React from 'react';

export default function CheeseList(props) {
  return (
    <ul>
      {props.cheeses.map((cheese, index) => {
        return <li key={ index }>{cheese}</li>;
      })}
    </ul>
  )
}
