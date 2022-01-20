
const AngryButton = (props) => {

  const { anger, angerFunc } = props;

  return (
    <button className="AngryButton"
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      onClick={angerFunc}
    >

      {anger < 1 && <span> Dont Click me too much!</span>}
      {anger > 1 && <span>Rawr!!!</span>}

    </button>
  )
}

export default AngryButton
