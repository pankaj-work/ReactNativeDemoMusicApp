import React from 'react';
import {Text} from 'react-native';
import styles from './textLabel.styles';

const TextLable = (props) => {
  return (
    <Text style={styles.details}>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.detailsText}>{props.details}</Text>
    </Text>
  );
};

export default TextLable;
