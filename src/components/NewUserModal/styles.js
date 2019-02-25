import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 2,
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 5,
    flex: 1,
    height: 42,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  buttonSubmit: {
    backgroundColor: colors.success,
    marginLeft: 15,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },

  modalContainer: {
    alignItems: 'center',
    backgroundColor: colors.darkTransparent,
    flex: 1,
    justifyContent: 'center',
    padding: metrics.basePadding,
  },

  modalContent: {
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: metrics.basePadding,
  },

  modalInput: {
    borderColor: colors.light,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    height: 42,
    marginTop: metrics.baseMargin * 2,
    paddingHorizontal: 10,
  },

  title: {
    color: colors.darker,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
