import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './songsList.styles';
import IMAGES from '../../../images';
import {convertMilliToMinSec} from '../../../lib';

const SongsList = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.pressHandler}>
      <View style={styles.status}>
        <Image
          style={styles.icon}
          source={props.imgUrl ? {uri: props.imgUrl} : IMAGES.music}
        />
      </View>
      <View style={styles.details}>
        <Text
          style={styles.detailText}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {props.name}
        </Text>
        <Text
          style={styles.detailText}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {props.track}
        </Text>
        <View style={styles.subContainer}>
          <Text style={styles.subDetailText}>
            {props.artist ? props.artist : ''}
          </Text>
          <Text style={styles.subDetailText}>
            {convertMilliToMinSec(props.trackTime)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongsList;
