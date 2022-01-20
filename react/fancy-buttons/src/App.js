import { useState } from 'react';
import AngryButton from './components/AngryButton';
import LightSwitchButton from './components/LightSwitchButton';
import CounterButton from './components/CounterButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import './App.css';

function App() {

  //For Light Switch
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => {
    setLight(light === 'on' ? 'off' : 'on')
  }

  //For Angry Button (testing)
  const [anger, setAnger] = useState(0);

  const angerFunc = () => {
    if (anger < 1) {
      setAnger(anger + 0.1);
    } else {
      setAnger(0);
    }
  }

  //For repetition
  const [repetitions, setRepetitions] = useState(1);
  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}> I like this text</span>)
  }
  const repetitionFunc = () => {
    setRepetitions(repetitions + 1)
  }


  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons</h1>
      <section>

        <AngryButton anger={anger} angerFunc={angerFunc} />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton textArray={textArray} repetitionFunc={repetitionFunc} />

      </section>
    </div>
  );

}

export default App;
