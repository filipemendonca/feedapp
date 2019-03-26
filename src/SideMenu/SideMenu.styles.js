import CommonStyles from '../commonStyles';

export default {
    container: {      
      flex: 1,
    },
    navItemStyle: {
      padding: 10,
      fontFamily: CommonStyles.FontFamily,      
      fontSize: 20
    },
    navSectionStyle: {
      backgroundColor: CommonStyles.colors.white
    },
    sectionHeadingStyle: {            
      height: 200,              
      flexDirection: 'row',
      alignItems: 'flex-end',          
      backgroundColor: CommonStyles.colors.default
    },
    sectionHeadingStyleText: {        
      fontFamily: 'Montserrat-ExtraBold',
      fontSize: 20,      
      paddingVertical: 10,
      paddingHorizontal: 10,
      color: CommonStyles.colors.white,      
    },
    footerContainer: {
      padding: 20,
      backgroundColor: 'lightgrey'
    }
  };