import {View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import CustomText from '../common/CustomText';
import PropTypes from 'prop-types';

export default function Card({text, imagePath}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('pressed');
      }}>
      <View style={styles.cardContainer}>
        <View style={styles.imageCircle}>
          <Image
            source={require('../../assets/calculator.png')}
            style={{width: 70, height: 70}}
          />
          {console.log(imagePath)}
        </View>
        <CustomText text={text} size={18} fontColor="grey" weight={500} />
      </View>
    </TouchableWithoutFeedback>
  );
}

Card.propTypes = {
  text: PropTypes.string,
  imagePath: PropTypes.string,
};

Card.defaultProps = {
  text: 'BLASTING PREDICTIONS',
  imagePath: `require('../../assets/calculator.png')`,
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
    width: '45%',
    gap: 10,
  },
  imageCircle: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
