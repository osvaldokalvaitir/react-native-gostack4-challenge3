import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import { View, Image } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';

import styles from './styles';

class Map extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    map: PropTypes.shape({
      markers: PropTypes.arrayOf(
        PropTypes.shape({
          user: PropTypes.shape({
            id: PropTypes.number,
            avatar_url: PropTypes.string,
            name: PropTypes.string,
            login: PropTypes.string,
          }),
          coordinates: PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
          }),
        }),
      ),
    }).isRequired,
  };

  state = {
    markerSelected: null,
  };

  handleMapPress = ({ geometry }) => {
    const { showModal } = this.props;
    const [ longitude, latitude ] = geometry.coordinates;

    showModal(latitude, longitude);
  };

  render() {
    const { map } = this.props;
    const { markerSelected } = this.state;

    return (
      <MapboxGL.MapView
        showUserLocation
        style={styles.container}
        onLongPress={this.handleMapPress}
        centerCoordinate={[-49.6437627, -21.2123286]}
      >
        {map.markers.map((marker, i) => (
          <MapboxGL.PointAnnotation
            key={String(marker.user.id)}
            id={String(marker.user.id)}
            title={marker.user.login}
            selected={markerSelected === i}
            onSelected={() => this.setState({ markerSelected: i })}
            coordinate={[marker.coordinates.longitude, marker.coordinates.latitude]}
          >
            <View style={styles.pointContainer}>
              <Image style={styles.pointImage} source={{ uri: marker.user.avatar_url }} />
            </View>

            <MapboxGL.Callout title={marker.user.name} />
          </MapboxGL.PointAnnotation>          
        ))}
      </MapboxGL.MapView>
    );
  }
}

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(Map);