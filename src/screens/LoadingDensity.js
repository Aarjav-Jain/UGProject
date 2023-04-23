import {useState, useReducer} from 'react';
import CustomForm from '../components/common/CustomForm';

export default function LoadingDensity() {
  const initialValues = {
    explosiveDensity: null,
    chargeDiameter: null,
  };

  const labels = [`Explosive Density(g/cm\xB3}`, 'Charge Diameter(Mm)'];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_explosiveDensity': {
        return {...state, explosiveDensity: action.value};
      }
      case 'changed_chargeDiameter': {
        return {...state, chargeDiameter: action.value};
      }
    }
  };

  const handleClick = () => {
    const loadingDensity =
      7.854 *
      Math.pow(10, -4) *
      state.explosiveDensity *
      state.chargeDiameter *
      state.chargeDiameter;
    setResult(loadingDensity.toFixed(2));
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
      resultUnits="kg/m"
      resultText="Loading Density is"
    />
  );
}
