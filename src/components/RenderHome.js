import React, { Component } from 'react';
import {View, Text, ImageBackground, Image } from 'react-native';
import styles from '../screens/ScreenStyles';

export default class RenderHome extends Component {
  render() {    
    const {navigate} = this.props.navigation;
    return (
        <View>
            {
                this.props.list.dataList.map(item => {
                    if (item.category === 'devices'){    
                        return (                              
                            <View>
                                <View style={styles.section1}>
                                    <Text style={styles.sectionText}>{item.category}</Text>
                                </View>
                                {
                                    item.listInfo.map(item2 => {                                        
                                        return (      
                                            <View onTouchEndCapture={() => navigate('HomeInfo', {id: item2.id, category: item.category, screen: "Home" })}>
                                                <ImageBackground style={[styles.image, {flex: 1, flexDirection: 'column'}]} source={item2.src}>
                                                    <View style={{justifyContent: 'center'}}>
                                                        <View style={{flexDirection: 'row'}}>
                                                            <View style={{
                                                                        flex: 1,                                                                                                                 
                                                                        justifyContent: 'center',  
                                                                        alignItems: 'flex-start',                                                          
                                                                        padding: 15
                                                                    }}>
                                                                <Image source={require('../../assets/img/arrow_left.png')}/>                                            
                                                            </View>
                                                            <View style={{      
                                                                        flex: 1,                                                                                           
                                                                        justifyContent: 'center',
                                                                        alignItems: 'flex-end',
                                                                        padding: 15,                        
                                                                    }}>
                                                                <Image source={require('../../assets/img/arrow_right.png')}/>
                                                            </View> 
                                                        </View>
                                                        
                                                        <View style={{flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 10}}>
                                                            <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, color: "#FFF"}}>
                                                                {item2.title}                     
                                                            </Text>                    
                                                        </View>    
                                                        <View style={{flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 10}}>
                                                            <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 16, color: "#FFF"}}>
                                                                {item2.description.substring(0, 30)}...
                                                            </Text>
                                                        </View>  
                                                    </View>                         
                                                </ImageBackground>
                                            </View>                                           
                                        )
                                    })
                                }
                        </View>   
                        );            
                    }
                    else {
                        return (                              
                            <View>
                                <View style={styles.section1}>
                                    <Text style={styles.sectionText}>{item.category}</Text>
                                </View>
                                {
                                    item.listInfo.map(item2 => {                                        
                                        return (       
                                            <View onTouchEndCapture={() => navigate('HomeInfo', {id: item2.id, category: item.category })}>
                                                <ImageBackground style={[styles.image, {flex: 1, flexDirection: 'column'}]} source={item2.src}>
                                                    <View style={{justifyContent: 'center'}}>
                                                        <View style={{flexDirection: 'row'}}>
                                                            <View style={{
                                                                        flex: 1,                                                                                                                 
                                                                        justifyContent: 'center',  
                                                                        alignItems: 'flex-start',                                                          
                                                                        padding: 15
                                                                    }}>
                                                                <Image source={require('../../assets/img/arrow_left.png')}/>                                            
                                                            </View>
                                                            <View style={{      
                                                                        flex: 1,                                                                                           
                                                                        justifyContent: 'center',
                                                                        alignItems: 'flex-end',
                                                                        padding: 15,                        
                                                                    }}>
                                                                <Image source={require('../../assets/img/arrow_right.png')}/>
                                                            </View> 
                                                        </View>
                                                        
                                                        <View style={{flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 10}}>
                                                            <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, color: "#FFF"}}>
                                                                {item2.title}                     
                                                            </Text>                    
                                                        </View>    
                                                        <View style={{flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 10}}>
                                                            <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 16, color: "#FFF"}}>
                                                                {item2.description.substring(0, 30)}...
                                                            </Text>
                                                        </View>  
                                                    </View>                         
                                                </ImageBackground>
                                            </View>                                           
                                        )
                                    })
                                }
                        </View>   
                        );     
                    }
                })
            }
        </View>
    );
  }
}
