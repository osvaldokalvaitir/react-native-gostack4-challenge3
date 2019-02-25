import React from 'react';

import { View } from 'react-native';

import Map from '~/components/Map';
import NewUserModal from '~/components/NewUserModal';

import styles from './styles';  

const Main = () => (
  <View style={styles.container}>
    <Map />
    <NewUserModal />
  </View>
);

export default Main;