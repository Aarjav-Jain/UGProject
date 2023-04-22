import {useState, useReducer} from 'react';
import CustomForm from '../components/common/CustomForm';

export default function DetonationPressure() {
  const initialValues = {
    densityOfExplosive: null,
    velocityOfDetonation: null,
  };

  const labels = [
    `Density of Explosive (kg/m${(<sup>3</sup>)})`,
    'Velocity of Detonation(m/s)',
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_densityOfExplosive': {
        return {...state, densityOfExplosive: action.value};
      }
      case 'changed_velocityOfDetonation': {
        return {...state, velocityOfDetonation: action.value};
      }
    }
  };

  const handleClick = () => {
    const detonationPressure =
      (state.densityOfExplosive *
        Math.pow(state.velocityOfDetonation, 2) *
        Math.pow(10, -6)) /
      2;
    setResult(detonationPressure.toFixed(2));
  };

  const [state, dispatch] = useReducer(reducer, initialValues);
  const [result, setResult] = useState('');

  return (
    <CustomForm
      handleClick={handleClick}
      state={state}
      dispatch={dispatch}
      initialValues={initialValues}
      labels={labels}
      result={result}
      setResult={setResult}
      resultUnits="MPa"
      resultText="Detonation Pressure is"
    />
  );
}
