import React from 'react';
import {View, Modal, Image} from 'react-native';
import styles from './loader.styles';
import IMAGES from '../../../images';

const Loader = (params) => {
  if (params.loader) {
    return (
      <Modal
        animationType={'none'}
        transparent
        visible={params.loader}
        onRequestClose={() => {}}>
        <View style={styles.loaderContainer}>
          <Image
            source={IMAGES.appLoader}
            style={styles.loader}
            resizeMode="contain"
          />
        </View>
      </Modal>
    );
  }
  return <View />;
};

export default Loader;
