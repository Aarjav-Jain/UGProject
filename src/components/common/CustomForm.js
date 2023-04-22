import {View, ScrollView, StyleSheet} from 'react-native';
import {useState} from 'react';
import {Button, Input} from 'react-native-elements';
import CustomText from './CustomText';

const CustomForm = ({
  handleClick,
  state,
  dispatch,
  initialValues,
  labels,
  result = '',
  setResult,
  resultUnits,
  btnText = 'Calculate',
  resultText = 'Calculated value is',
}) => {
  const initialKeys = Object.keys(initialValues);
  const [errObj, setErrObj] = useState({});

  const declareErrorObj = () => {
    setResult(null);
    const error = {};
    let hasError = false;

    // required && only numeric values allowed
    for (i of initialKeys) {
      error[i] = !state[i] || Number.isNaN(Number(state[i]));
      if (error[i]) hasError = true;
    }
    setErrObj({...error});
    return hasError;
  };

  const validateInput = async () => {
    if (!declareErrorObj()) await handleClick();
  };

  return (
    <View style={styles.flexContainer}>
      {result && (
        <View style={styles.result}>
          <CustomText
            text={`${resultText} : ${result}${resultUnits}`}
            size={20}
          />
        </View>
      )}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {initialKeys.map((item, index) => {
          return (
            <Input
              key={index}
              label={labels[index]}
              value={state[item]}
              onChangeText={newValue =>
                dispatch({type: `changed_${item}`, value: newValue})
              }
              keyboardType="numeric"
              inputMode="decimal"
              containerStyle={styles.inputField}
              errorMessage={
                errObj[item]
                  ? Number.isNaN(Number(state[item]))
                    ? 'Please enter a number'
                    : 'This Field is Required'
                  : ''
              }
            />
          );
        })}
      </ScrollView>
      <Button
        onPress={validateInput}
        title={btnText}
        buttonStyle={{backgroundColor: '#3b9aad'}}
        containerStyle={styles.btnStyle}
        titleStyle={{fontSize: 20}}
      />
    </View>
  );
};

export default CustomForm;

const styles = StyleSheet.create({
  flexContainer: {
    // flexGrow: 1,
    // flex: 1,
    // backgroundColor: 'green',
    // height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  scrollViewContainer: {
    paddingTop: 30,
    // backgroundColor: 'orange',
    alignItems: 'center',
    // width: '100%',
  },
  inputField: {width: '90%'},
  btnStyle: {
    // marginTop: 10,
    // alignContent: 'flex-end',
    // width: '90%',
    marginTop: 5,
    marginHorizontal: '5%',
  },
  result: {
    // paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: '5%',
    marginTop: 10,
    // width: '80%',
    alignItems: 'center',
  },
});
