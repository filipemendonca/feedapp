import React, { Component } from 'react';
import {
  View, Text, ScrollView, Image, 
  AsyncStorage, StyleSheet, 
  ImageBackground, TouchableOpacity, Alert} from 'react-native';
import {DrawerActions} from 'react-navigation';
import styles from './ScreenStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-swipeable';

class Favorites extends Component {

    constructor(props){
        super(props);

        this.state = {                    
          model: [],          
        }
    }

    handleClickOpenMenu = () => {        
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    } 

    mountListRegister = async () => {
        const data = await AsyncStorage.getItem("@feedapp:arrayFavorites");
        const arrayFavorites = JSON.parse(data) || [];
        this.setState({model: arrayFavorites});        
    }    

    onDelete = async (id) => {
      const data = await AsyncStorage.getItem("@feedapp:arrayFavorites");
      const arrayFavorites = JSON.parse(data) || [];            

      const list = arrayFavorites.filter((item) => {        
        return item.reg.id !== id;
      });                

      await AsyncStorage.setItem("@feedapp:arrayFavorites", JSON.stringify(list));             
    } 

  render() {               

    this.mountListRegister();           

    return (
         <View>
             <View style={styles.container}>
                <View style={styles.sectionHeader}>
                    <View onTouchStart={this.handleClickOpenMenu}>
                        <Image style={{width: 28, height: 19}} source={require('../../assets/img/ic_menu.png')}/>
                    </View>
                    <Text style={styles.textHeader}>Favorites</Text>
                </View> 
             </View>
                <ScrollView>
                    {
                    this.state.model.map(item => {
                        return (   
                          <Swipeable leftActionActivationDistance={200} rightButtons={[
                            <TouchableOpacity style={[styleSwipe.exclude, {paddingLeft: 20}]} 
                              onPress={() => this.onDelete(item.reg.id)}>
                              <Icon name="trash" size={35} color="#FFF"/>     
                            </TouchableOpacity> 
                          ]}>
                             <ImageBackground onTouchEndCapture={() => {}} source={item.reg.src} style={styles.image}>
                                <View style={{justifyContent: 'center'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{
                                                        flex: 1,                                                                                                                 
                                                        justifyContent: 'center',  
                                                        alignItems: 'flex-start',                                                          
                                                        padding: 15}}>
                                            <Image source={require('../../assets/img/arrow_left.png')}/> 
                                        </View>
                                        <View style={{      
                                                    flex: 1,                                                                                           
                                                    justifyContent: 'center',
                                                    alignItems: 'flex-end',
                                                    padding: 15,}}>
                                            <Image source={require('../../assets/img/arrow_right.png')}/>
                                        </View>               
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 10}}>
                                        <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, color: "#FFF"}}>
                                            {item.reg.title}                     
                                        </Text>                    
                                    </View>                                     
                                </View>
                            </ImageBackground> 
                          </Swipeable>                                                           
                        );  
                    })
                    }   
                </ScrollView>         
         </View>
    );
  }
}

export default Favorites;

const styleSwipe = StyleSheet.create({
  exclude: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',    
  }
});