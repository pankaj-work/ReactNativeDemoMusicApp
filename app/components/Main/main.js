import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SplashScreen from 'react-native-splash-screen';
import PropTypes from 'prop-types';
import {setInitialData, updateInitialData} from '../../redux/actions';
import styles from './main.styles';
import {Loader, SongsList} from '../common';
import {consoleLog} from '../../lib';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      musicList: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.musicList !== prevState.musicList) {
      return {
        musicList: nextProps.musicList,
        refreshing: false,
      };
    } else {
      return null;
    }
  }

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
      this.props.setInitData();
    }, 2000);
  }

  songsListClickHandler = (item) => {
    consoleLog('User clicked ' + item.collectionName);
    this.props.navigation.navigate('Details', {details: item});
  };

  musicListUI = () => {
    const {updateInitData} = this.props;
    const {refreshing, musicList} = this.state;
    return (
      <FlatList
        data={musicList}
        renderItem={({item}) => (
          <SongsList
            name={item.collectionName}
            track={item.trackName}
            trackTime={item.trackTimeMillis}
            imgUrl={item.artworkUrl100}
            artist={item.artistName}
            pressHandler={() => {
              this.songsListClickHandler(item);
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        onRefresh={() => {
          this.setState({refreshing: true});
          updateInitData();
        }}
        refreshing={refreshing}
        keyExtractor={(item) => item.trackId.toString()}
      />
    );
  };

  render() {
    const {Loading} = this.props;
    return (
      <View style={styles.container}>
        {Loading ? <Loader loader={Loading} /> : this.musicListUI()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    Loading: state.main.Loader,
    musicList: state.main.musicData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setInitData: bindActionCreators(setInitialData, dispatch),
    updateInitData: bindActionCreators(updateInitialData, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  Loader: PropTypes.bool,
};

Main.defaultProps = {
  Loader: false,
};
