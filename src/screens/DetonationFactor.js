import {useState, useReducer} from 'react';
import CustomForm from '../components/common/CustomForm';

const DetonationFactor = () => {
  const initialValues = {
    coalProduction: null,
    noOfHoles: null,
  };

  const labels = ['Coal Production (tonne)', 'No of Holes'];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_coalProduction': {
        return {...state, coalProduction: action.value};
      }
      case 'changed_noOfHoles': {
        return {...state, noOfHoles: action.value};
      }
    }
  };

  const handleClick = () => {
    const detonationFactor = state.coalProduction / state.noOfHoles;
    setResult(detonationFactor.toFixed(2));
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
      resultUnits="tonne"
      resultText="Detonation Factor is"
    />
  );
};

export default DetonationFactor;
