import {Dimensions, StyleSheet} from 'react-native';
import THEME from '../../../config/theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  loaderContainer: {
    width,
    height,
    position: 'absolute',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.8,
    backgroundColor: THEME.$backgroundColor,
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 100,
    height: 200,
    width: 200,
  },
});

export {styles as default};
