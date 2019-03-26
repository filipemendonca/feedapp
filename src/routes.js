import Home from './screens/Home';
import Favorites from './screens/Favorites';
import HomeInfo from './screens/HomeInfo';
import SideMenu from './SideMenu/SideMenu';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

const drawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home
    },
    Favorites: {
        screen: Favorites
    },
    HomeInfo: {
        screen: HomeInfo        
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: 300,   
});

const Router = createAppContainer(drawerNavigator);

export default Router;
