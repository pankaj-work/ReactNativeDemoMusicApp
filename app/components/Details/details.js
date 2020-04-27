import React, {Component} from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from './details.style';
import IMAGES from '../../images';
import {convertMilliToMinSec} from '../../lib';
import {TextLabel} from '../common';

class Details extends Component {
  render() {
    const {
      route: {
        params: {details},
      },
    } = this.props;
    const {
      artworkUrl100,
      collectionName,
      trackName,
      artistName,
      trackTimeMillis,
      trackCensoredName,
      primaryGenreName,
    } = details;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={
              artworkUrl100
                ? {uri: artworkUrl100.replace('100x100', '250x250')}
                : IMAGES.music
            }
          />
        </View>
        <View style={styles.details}>
          <TextLabel
            title={'Track Censored Name: '}
            details={trackCensoredName}
          />
          <TextLabel title={'Collection: '} details={collectionName} />
          <TextLabel title={'Artist: '} details={artistName} />
          <TextLabel title={'Track: '} details={trackName} />
          <TextLabel
            title={'Duration: '}
            details={convertMilliToMinSec(trackTimeMillis)}
          />
          <TextLabel title={'Genre: '} details={primaryGenreName} />
        </View>
      </ScrollView>
    );
  }
}

export default Details;
