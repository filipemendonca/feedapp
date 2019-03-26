import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './SideMenu.styles';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

class SideMenu extends Component {

    navigateToScreen = (route) => () => {        

        const navigateAction = NavigationActions.navigate({
          routeName: route          
        });
        this.props.navigation.dispatch(navigateAction);       
    } 
    
    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.sectionHeadingStyle}>
                        <Text style={styles.sectionHeadingStyleText}>
                            IDX
                        </Text>                    
                    </View>
                    <View>                    
                        <View style={styles.navSectionStyle}>
                            <Text style={[styles.navItemStyle]} onPress={this.navigateToScreen('Home')}>
                                Home
                            </Text>
                            <Text style={[styles.navItemStyle]} onPress={this.navigateToScreen('Favorites')}>
                                Favorites
                            </Text>
                        </View>
                    </View>
                </ScrollView>                
          </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;