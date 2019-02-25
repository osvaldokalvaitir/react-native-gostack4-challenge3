import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  callout: {
    backgroundColor: colors.white,
    borderColor: colors.light,
    borderRadius: 5,
    borderWidth: 1,
    padding: metrics.baseMargin,
  },

  container: {
    flex: 1,
  },

  pointContainer: {
    borderColor: colors.white,
    borderRadius: 21,
    borderWidth: 5,
    height: 42,
    overflow: 'hidden',
    width: 42,
  },

  pointImage: {
    borderRadius: 16,
    height: 32,
    width: 32,
  },
});

export default styles;
