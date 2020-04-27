import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from '../../../lib/normalize';
import THEME from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(1),
    marginBottom: verticalScale(1),
    flex: 1,
    flexDirection: 'row',
    backgroundColor: THEME.$white,
    padding: moderateScale(10),
  },
  details: {
    flex: 4,
    marginLeft: moderateScale(10),
  },
  detailText: {
    fontSize: scale(12),
  },
  subDetailText: {
    fontSize: scale(12),
    flex: 1,
  },
  status: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: scale(60),
    height: scale(60),
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
