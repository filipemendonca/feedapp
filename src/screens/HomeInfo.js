import React, { Component } from 'react';
import DataModel from '../model/DataModel';
import {Alert, View, Text, ImageBackground, Image, ScrollView, AsyncStorage } from 'react-native';
import styles from '../screens/ScreenStyles';

export default class HomeInfo extends Component {  

  constructor(props){
    super(props);
    this.state = {
      arrayFav: []
    }
  }  

  handleFavorite = async () => {    
    const data = await AsyncStorage.getItem("@feedapp:arrayFavorites");
    const arrayFavorites = JSON.parse(data) || [];    

    const reg = this.mountRegister(this.props.navigation.getParam('id'), this.props.navigation.getParam('category'))        

      let list = arrayFavorites.filter(item => {
        return item.reg.id !== reg.id;
      });

      list.push({
        reg: {
          id: reg.id,
          title: reg.title,
          src: reg.src,
          description: reg.description
        }
      });

      await AsyncStorage.setItem("@feedapp:arrayFavorites", JSON.stringify(list));

      Alert.alert("Successfully", "This article is now part of your favorites!");            
  }   

  handlerGoBack = (screen) => {    
    return screen === "Favorites" ? this.props.navigation.navigate("Favorites") : this.props.navigation.goBack();
  }

  mountRegister = (id, category) => {
    const model = DataModel.dataList.find(item => item.category === category);
    const reg = model.listInfo.find(item => item.id === id);
    return reg;
  }

  render() {                                  
    var reg = this.mountRegister(this.props.navigation.getParam('id'), this.props.navigation.getParam('category'))

    return (      
      <View>                    
        <ImageBackground source={reg.src} style={styles.image}>
          <View style={{justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{
                            flex: 1,                                                                                                                 
                            justifyContent: 'center',  
                            alignItems: 'flex-start',                                                          
                            padding: 15}}>
                <View onTouchEndCapture={() =>  this.props.navigation.goBack()}>
                  <Image source={require('../../assets/img/ic_back.png')}/>                                            
                </View>
              </View>
              <View style={{      
                           flex: 1,                                                                                           
                           justifyContent: 'center',
                           alignItems: 'flex-end',
                           padding: 15,}}>
                <View onTouchEndCapture={this.handleFavorite}>
                  <Image source={require('../../assets/img/ic_star.png')}/>
                </View>
              </View>               
            </View>
          </View>
        </ImageBackground>
        <ScrollView style={{padding: 10}}>   
            <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 20, color: '#000'}}>{reg.title}</Text>
            <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 14, color: '#EC008C'}}>{this.props.navigation.getParam('category')}</Text>
            <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 17, paddingTop: 15, textAlign: 'left'}}>{reg.description}</Text>
        </ScrollView>        
      </View>
      );
  }
}
