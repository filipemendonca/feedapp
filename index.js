import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import Router from './src/routes';

export default class CustomDrawer extends Component {
    render(){
        return (
            <Router/>
        );
    }
}

AppRegistry.registerComponent('feedapp', () => CustomDrawer);

