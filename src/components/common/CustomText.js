import {Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default function CustomText({
  text,
  size,
  fontColor,
  weight,
  textAlignment,
  customStyle,
}) {
  return (
    <Text
      style={{
        color: 'black',
        fontSize: size,
        color: fontColor,
        fontWeight: weight,
        textAlign: textAlignment,
        width: '80%',
        ...customStyle,
      }}>
      {text}
    </Text>
  );
}

CustomText.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  fontColor: PropTypes.string,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlignment: PropTypes.string,
  customStyle: PropTypes.object,
};

CustomText.defaultProps = {
  text: 'text',
  size: 16,
  fontColor: 'black',
  weight: 400,
  textAlignment: 'center',
  customStyle: {},
};
