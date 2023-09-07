import {useState, useReducer} from 'react';
import CustomForm from '../components/common/CustomForm';

export default function BlastHoleLength() {
  const initialValues = {
    blastHoleInclination: null,
    benchHeight: null,
    subDrilling: null,
  };

  const labels = [
    'Blast Hole Inclination (w.r.t vertical) (deg)',
    'Bench Height (m)',
    'Sub Drilling',
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_blastHoleInclination': {
        return {...state, blastHoleInclination: action.value};
      }
      case 'changed_benchHeight': {
        return {...state, benchHeight: action.value};
      }
      case 'changed_subDrilling': {
        return {...state, subDrilling: action.value};
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
      resultText="Blast Hole Length is"
    />
  );
}
