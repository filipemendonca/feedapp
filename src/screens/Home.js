import React, { Component } from 'react';
import {View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import {DrawerActions} from 'react-navigation';
import styles from './ScreenStyles';
import dataModel from '../model/DataModel';
import RenderHome from '../components/RenderHome';

class Home extends Component {                          

    handleClickOpenMenu = () => {        
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }        

  render() {             
    return (
        <View style={styles.container}>
            <View style={styles.sectionHeader}>
                <View onTouchStart={this.handleClickOpenMenu}>
                    <Image style={{width: 28, height: 19}} source={require('../../assets/img/ic_menu.png')}/>
                </View>
                <Text style={styles.textHeader}>Home</Text>
            </View> 
            <ScrollView>                   
                <RenderHome list={dataModel} navigation={this.props.navigation}/>               
            </ScrollView>              
        </View>
    );
  }
}

export default Home;
