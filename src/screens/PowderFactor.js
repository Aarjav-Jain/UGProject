import {View, Text} from 'react-native';
import {useState, useReducer} from 'react';
import CustomForm from '../components/common/CustomForm';

const PowderFactor = () => {
  const initialValues = {
    weightOfExplosive: null,
    weightOfRockBroken: null,
  };

  const labels = [
    'Weight of Explosive Consumed (kg)',
    'Weight of Rock Broken (tonne)',
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_weightOfExplosive': {
        return {...state, weightOfExplosive: action.value};
      }
      case 'changed_weightOfRockBroken': {
        return {...state, weightOfRockBroken: action.value};
      }
    }
  };

  const handleClick = () => {
    const powderFactor = state.weightOfExplosive / state.weightOfRockBroken;
    setResult(powderFactor);
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
      resultText="Powder Factor is"
    />
  );
};

export default PowderFactor;
