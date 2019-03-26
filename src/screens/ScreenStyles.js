import CommonStyles from '../commonStyles';
import {Dimensions} from 'react-native';

export default {
    container: {        
        paddingTop: 15,
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
    },
    textInfo: {
        fontFamily: CommonStyles.FontFamily,
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    textHeader: {
        fontFamily: CommonStyles.FontFamily,
        fontSize: 20,
        paddingHorizontal: 10,              
        color: CommonStyles.colors.default,
        bottom: 5        
    },
    section1: {
        backgroundColor: CommonStyles.colors.default,        
    },
    sectionText: {
        padding: 10,        
        color: CommonStyles.colors.white,
        fontSize: 18
    },
    sectionHeader: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    contentImageIconsInit: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    contentImageIconsFinal: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
}