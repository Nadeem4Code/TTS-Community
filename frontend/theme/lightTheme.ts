import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { lightColors } from './lightColors';

export const lightTheme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: { ...lightColors },
};
