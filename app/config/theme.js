const colors = {
  $white: '#ffffff',
  $black: '#000000',
  $lightGrayishBlue: '#dbe9fb',
  $lightlyDesaturatedBlue: '#6e8fbd',
  $lightGrayishCyan: '#e1fafd',
  $moderateBlue: '#4896cf',
  $veryPaleOrange: '#ffe6ce',
  $vividOrange: '#ed970c',
};

const App_THEME = {
  $buttonColor: colors.$lightGrayishBlue,
  $buttonBorder: colors.$lightlyDesaturatedBlue,
  $screenBackgroundColor: colors.$lightGrayishCyan,
  $backgroundColor: colors.$white,
};

const THEME = {
  ...App_THEME,

  // COLORS
  ...colors,
};

export {THEME as default};
