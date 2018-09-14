/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'





class TitleText extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 30, color: 'white'}}>
        {this.props.label}
      </Text>
    )
  }
}

class BodyText extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 23, color: 'rgba(255, 255, 255, 0.64)'}}>
        {this.props.label}
      </Text>
    )
  }
}
/*
class homeText extends React.Component {
  render() {
    return {
      <Text style= {{ }}>
      </Text> 
    }
  }
}
*/
class Home extends React.Component {

  homeStyle() {
    return {
      flex: 1,
      backgroundColor: 'rgb(255, 188, 60)', 
      justifyContent: 'space-around',
      alignItems: "center"
    }
  }

  secondStyle() {
    return {
      flex: 1,
      backgroundColor: 'rgb(68,85,187)', 
      justifyContent: 'space-around',
      alignItems: "center"
    }
  }

  thirdStyle() {
    return {
      flex: 1,
      backgroundColor: 'rgb(242, 153, 133)',
      justifyContent: 'center',
      alignItems: "center"
    }
  }

  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={0}>

        <View style={this.homeStyle()}>

          <TitleText label = "Move around," />
          <BodyText label = "Let music find you" />

        </View>

        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={this.homeStyle()}>
            <TitleText label="Top" />
          </View> 
          <View style={this.secondStyle()}>
            <TitleText label="Discover, be discovered." />
          </View>
          {/* <View style={this.viewStyle()}>
            <TitleText label="Bottom" />
          </View> */}
        </Swiper>        
        <View style={this.thirdStyle()}>
          <TitleText label="Keep track of your swipes" />
        </View>
      </Swiper>
      
    )
  }
}

export default Home

const styles = StyleSheet.create({
  TitleText:{
    fontSize: 30,
  },
  BodyText:{
    fontFamily: 'Poppins-ExtraBold'
  },
  baseText: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 30
  },
  container: {
    flex: 1
  },
  homeContainer: {
    flex: 1,
    backgroundColor: 'rgb(255, 188, 60)', 
    height: 75,
    width: 209
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
