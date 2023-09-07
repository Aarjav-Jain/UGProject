import {useState, useReducer} from 'react';
import CustomForm from '../components/common/CustomForm';
import {View} from 'react-native';
import CustomText from '../components/common/CustomText';
import {SelectList} from 'react-native-dropdown-select-list';

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

  const [state, dispatch] = useReducer(reducer, initialValues);
  const [result, setResult] = useState('');
  const [selected, setSelected] = useState('Soft');
  const [placeholder, setPlaceholder] = useState('Soft');

  const handleClick = () => {
    let blastHoleLength = state.benchHeight / 66;
    if (selected == 'Hard') blastHoleLength = state.benchHeight / 40;
    setResult(blastHoleLength.toFixed(2) * 1000);
  };

  const SelectRockType = () => {
    const data = [
      {key: 1, value: 'Soft'},
      {key: 2, value: 'Hard'},
    ];

    return (
      <View>
        <CustomText
          text={'Select Rock Type:'}
          fontColor={'grey'}
          weight={'bold'}
        />
        <SelectList
          setSelected={val => {
            setSelected(val);
            setPlaceholder(val);
          }}
          data={data}
          save="value"
          search={false}
          //   defaultOption={{key: '1', value: 'Soft'}}
          placeholder={placeholder}
          dropdownTextStyles={{color: 'black', fontSize: 16}}
          boxStyles={{marginBottom: '5%', marginTop: '4%'}}
          inputStyles={{color: 'black', width: '80%', fontSize: 16}}
          maxHeight={100}
        />
      </View>
    );
  };

  return (
    <>
      <CustomForm
        handleClick={handleClick}
        state={state}
        dispatch={dispatch}
        initialValues={initialValues}
        labels={labels}
        result={result}
        setResult={setResult}
        resultUnits="mm"
        resultText="Blast Hole Diameter is"
        children={<SelectRockType />}
      />
    </>
  );
}
