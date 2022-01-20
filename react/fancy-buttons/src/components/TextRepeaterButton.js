const TextRepeaterButton = (props) => {

  const { textArray, repetitionFunc } = props

  return (
    <button className="TextReapeaterButton" onClick={repetitionFunc}>
      {textArray}
    </button>
  )
}

export default TextRepeaterButton
