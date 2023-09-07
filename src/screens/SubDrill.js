import {useState, useReducer, useEffect} from 'react';
import CustomForm from '../components/common/CustomForm';
import {View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import CustomText from '../components/common/CustomText';

export default function SubDrill() {
  const initialValues = {
    blastHoleDiameter: null,
  };

  const labels = ['Blast Hole Diameter (mm)'];

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changed_blastHoleDiameter': {
        return {...state, blastHoleDiameter: action.value};
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValues);
  const [result, setResult] = useState('');
  const [selectedRock, setSelectedRock] = useState('Soft ( < 70 Mpa)');

  const handleClick = () => {
    let subDrill = state.blastHoleDiameter;
    if (selectedRock == 'Soft ( < 70 MPa)') subDrill = 10 * subDrill;
    else if (selectedRock == 'Medium ( 70 - 120 MPa)') subDrill = 11 * subDrill;
    else if (selectedRock == 'Hard ( 120 - 180 MPa)') subDrill = 12 * subDrill;
    else subDrill = 12 * subDrill;
    subDrill = subDrill / 1000;
    setResult(subDrill.toFixed(2));
  };

  const Selections = () => {
    const rockTypes = [
      {key: 1, value: 'Soft ( < 70 MPa)'},
      {key: 2, value: 'Medium ( 70 - 120 MPa)'},
      {key: 3, value: 'Hard ( 120 - 180 MPa)'},
      {key: 3, value: 'Very Hard ( > 180 MPa)'},
    ];

    return (
      <View>
        <View>
          <CustomText
            text={'Select Rock Type:'}
            fontColor={'grey'}
            weight={'bold'}
            textAlignment={'left'}
          />
          <SelectList
            setSelected={val => {
              setSelectedRock(val);
            }}
            data={rockTypes}
            save="value"
            search={false}
            //   defaultOption={{key: '1', value: 'Soft'}}
            placeholder={selectedRock}
            dropdownTextStyles={{color: 'black', fontSize: 16}}
            boxStyles={{marginBottom: '5%', marginTop: '4%'}}
            inputStyles={{color: 'black', width: '80%', fontSize: 16}}
            maxHeight={150}
          />
        </View>
      </View>
    );
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
      resultUnits="m"
      resultText="The Calculated Stemming is"
      children={<Selections />}
    />
  );
}
