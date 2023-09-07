import {useState, useReducer, useEffect} from 'react';
import CustomForm from '../components/common/CustomForm';
import {View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import CustomText from '../components/common/CustomText';

export default function StiffnessRatio() {
  const initialValues = {
    benchHeight: null,
    burden: null,
  };

  const labels = ['Bench Height (m)', 'Burden (m)'];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_benchHeight': {
        return {...state, benchHeight: action.value};
      }
      case 'changed_burden': {
        return {...state, burden: action.value};
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValues);
  const [result, setResult] = useState('');

  const handleClick = () => {
    let stiffnessRatio = state.benchHeight / state.burden;
    let ans;
    if (stiffnessRatio == 1) {
      ans =
        'Fragement: Poor\nFlyrock: Poor\nGround Vibration: Poor\nAirblast: Poor\n';
    } else if (stiffnessRatio == 2) {
      ans =
        'Fragement: Fair\nFlyrock: Fair\nGround Vibration: Fair\nAirblast: Fair\n';
    } else if (stiffnessRatio == 3)
      ans =
        'Fragement: Good\nFlyrock: Good\nGround Vibration: Good\nAirblast: Good\n';
    else
      ans =
        'Fragement: Excellent\nFlyrock: Excellent\nGround Vibration: Excellent\nAirblast: Excellent\n';
    setResult(ans);
  };

  return (
    <CustomForm
      handleClick={handleClick}
      state={state}
      dispatch={dispatch}
      initialValues={initialValues}
      labels={labels}
      result={result}
      setResult={setResult}
      resultText="For the given values: "
    />
  );
}
