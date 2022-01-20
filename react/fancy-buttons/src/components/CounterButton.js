
import React, { useState } from 'react'

const CounterButton = () => {
  //This func is kept in this component instead of main App component just to show diffe ways we can achieve this.
  const [clickAmount, setClickAmount] = useState(0);

  const handleClick = () => {
    setClickAmount(clickAmount + 1)
  }

  return (
    <button className="CounterButton" onClick={handleClick}>
      You clicked me {clickAmount} times.
    </button>
  )
}

export default CounterButton

