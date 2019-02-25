import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MapActions } from '~/store/ducks/map';
import { Creators as ModalActions } from '~/store/ducks/modal';

import styles from './styles';

class NewUserModal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool,
    }).isRequired,
    hideModal: PropTypes.func.isRequired,
    addGithubUserRequest: PropTypes.func.isRequired,
  };

  state = {
    userInput: '',
  };

  handleInputChange = (userInput) => {
    this.setState({ userInput });
  }

  handleSubmit = () => {
    const { addGithubUserRequest } = this.props;
    const { userInput } = this.state;

    addGithubUserRequest(userInput);
  };

  render() {
    const { modal, hideModal } = this.props;

    return (
      <Modal transparent visible={modal.visible} animationType="fade" onRequestClose={hideModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput
              autoFocus
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.modalInput}
              placeholder="Usuário do Github"
              onChangeText={this.handleInputChange}
            />
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={hideModal}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonSubmit]}
                onPress={this.handleSubmit}
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>              
            </View>
          </View>
        </View>
      </Modal>
    )
  }
};

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...MapActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(NewUserModal);
