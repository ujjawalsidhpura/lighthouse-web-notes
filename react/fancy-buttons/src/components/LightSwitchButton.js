

const LightSwitchButton = (props) => {

  const { light, switchLight } = props;

  return (

    <button className="LightSwitchButton" onClick={switchLight}>

      {light === 'on' && <span className="on"><i>💡</i>I am on</span>}
      {light === 'off' && <span className="off"><i>💡</i>I am off
      </span>}

    </button>

  )
}

export default LightSwitchButton

