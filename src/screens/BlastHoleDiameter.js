import React from 'react';
import {useState, useReducer} from 'react';
import CustomForm from '../components/common/CustomForm';

export default function BlastHoleDiameter() {
  const initialValues = {
    benchHeight: null,
  };

  const labels = ['Bench Height (m)'];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_benchHeight': {
        return {...state, benchHeight: action.value};
      }
    }
  };

  const handleClick = () => {
    const blastHoleLength =
      state.benchHeight /
        Math.cos((state.blastHoleInclination * 180) / Math.PI) +
      (1 - state.blastHoleInclination / 100) * state.subDrilling;
    setResult(blastHoleLength.toFixed(2));
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
      resultUnits="m"
      resultText="Blast Hole Diameter is"
    />
  );
}
