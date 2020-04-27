import {StyleSheet} from 'react-native';
import {scale} from '../../../lib/normalize';
import THEME from '../../../config/theme';

const styles = StyleSheet.create({
  details: {
    fontSize: scale(12),
  },
  titleText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: THEME.$black,
  },
  detailsText: {
    fontStyle: 'normal',
    color: THEME.$black,
    fontWeight: '800',
  },
});

export default styles;
