import {useState, useReducer} from 'react';
import CustomForm from '../components/common/CustomForm';

export default function EnergyFactor() {
  const initialValues = {
    explosiveEnergy: null,
    quantityOfRock: null,
  };

  const labels = ['Explosive Energy (kCal)', 'Quantity of Rock'];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_explosiveEnergy': {
        return {...state, explosiveEnergy: action.value};
      }
      case 'changed_quantityOfRock': {
        return {...state, quantityOfRock: action.value};
      }
    }
  };

  const handleClick = () => {
    const energyFactor = state.explosiveEnergy / state.quantityOfRock;
    setResult(energyFactor.toFixed(2));
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
      // resultUnits="tonne"
      resultText="Energy Factor is"
    />
  );
}
