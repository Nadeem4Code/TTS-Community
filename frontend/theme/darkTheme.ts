import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { darkColors } from './darkColors';

export const darkTheme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: { ...darkColors },
};
