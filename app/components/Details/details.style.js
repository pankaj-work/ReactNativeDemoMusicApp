import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '../../lib/normalize';
import THEME from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(1),
    marginBottom: verticalScale(1),
    flex: 1,
    flexDirection: 'column',
    backgroundColor: THEME.$screenBackgroundColor,
    padding: moderateScale(10),
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: verticalScale(250),
    height: verticalScale(250),
  },
  details: {
    flex: 1,
    padding: moderateScale(10),
  },
});

export default styles;
