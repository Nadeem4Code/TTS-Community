import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const createStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: theme.colors.onPrimary,
    },
    card: {
      marginBottom: 20,
      backgroundColor: theme.colors.onPrimary,
    },
    avatarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userName: {
      marginLeft: 10,
    },
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flex: 1,
    },
    icons: {
      width: 20,
      height: 20,
    },
    commentContainer:{
      flexDirection:'row',
      marginLeft:20,
      alignItems:'center'
    },
    comment:{
      marginRight:10
    }
  });
};
