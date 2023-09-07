import {useState, useReducer, useEffect} from 'react';
import CustomForm from '../components/common/CustomForm';
import {View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import CustomText from '../components/common/CustomText';

export default function Burden() {
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
  const [selectedExplosive, setSelectedExplosive] = useState('ANFO');
  const [selectedRock, setSelectedRock] = useState('Soft ( < 70 Mpa)');

  const handleClick = () => {
    let burden = state.blastHoleDiameter;
    if (selectedExplosive == 'ANFO') {
      if (selectedRock == 'Soft ( < 70 MPa)') burden = 28 * burden;
      else if (selectedRock == 'Medium-Hard ( 70 - 180 MPa)')
        burden = 23 * burden;
      else burden = 21 * burden;
    } else {
      if (selectedRock == 'Soft ( < 70 MPa)') burden = 38 * burden;
      else if (selectedRock == 'Medium-Hard ( 70 - 180 MPa)')
        burden = 32 * burden;
      else burden = 30 * burden;
    }
    burden = burden / 1000;
    setResult(burden.toFixed(2));
  };

  const Selections = () => {
    const explosives = [
      {key: 1, value: 'ANFO'},
      {key: 2, value: 'Water Gels/Emulsions'},
    ];

    const rockTypes = [
      {key: 1, value: 'Soft ( < 70 MPa)'},
      {key: 2, value: 'Medium-Hard ( 70 - 180 MPa)'},
      {key: 3, value: 'Very Hard ( > 180 MPa)'},
    ];

    return (
      <View>
        <View>
          <CustomText
            text={'Select Explosive Type:'}
            fontColor={'grey'}
            weight={'bold'}
            textAlignment={'left'}
          />
          <SelectList
            setSelected={val => {
              setSelectedExplosive(val);
            }}
            data={explosives}
            save="value"
            search={false}
            //   defaultOption={{key: '1', value: 'Soft'}}
            placeholder={selectedExplosive}
            dropdownTextStyles={{color: 'black', fontSize: 16}}
            boxStyles={{marginBottom: '5%', marginTop: '4%'}}
            inputStyles={{color: 'black', width: '80%', fontSize: 16}}
            maxHeight={100}
          />
        </View>
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
      resultText="The Calculated Burden is"
      children={<Selections />}
    />
  );
}
