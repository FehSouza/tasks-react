const baseTheme = {};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#236fe2',
    secondary: '#ffffff',
    backgroundPrimary: '#202226',
    backgroundSecondary: '#2a2c31',
    border: '#2a2c31',
    letterPrimary: '#ffffff',
    letterSecondary: '#9a9b9e',
    card: '#373a44',
    delete: '#d95656',
    statusPrimary: '#236fe2',
    statusSecondary: '#393b41',
    primaryA: '#236fe2bf',
    secondaryA: '#ffffffbf',
    backgroundPrimaryA: '#20222680',
    backgroundSecondaryA: '#2a2c3180',
    deleteA: '#d95656bf',
  },
  ...baseTheme,
};

const lightTheme = {
  dark: false,
  colors: {
    primary: '#236fe2',
    secondary: '#ffffffbf',
    backgroundPrimary: '#ffffffbf',
    backgroundSecondary: '#ffffffbf',
    border: '#236fe2',
    letterPrimary: '#000000',
    letterSecondary: '#202226',
    card: '#A9A9A9',
    delete: '#d95656',
    statusPrimary: '#236fe2',
    statusSecondary: '#393b41',
    primaryA: '#236fe2bf',
    secondaryA: '#ffffffbf',
    backgroundPrimaryA: '#20222680',
    backgroundSecondaryA: '#2a2c3180',
    deleteA: '#d95656bf',
  },
  ...baseTheme,
};

export const theme = {
  dark: darkTheme,
  light: lightTheme,
};
