export const colors = {
  BLACK: '#000000',
  WHITE: '#ffffff',
  GRAY: '#aaaaaa',
  PRIMARY: '#8049db',
  SELECTED: '#8f5edf',
  TITLE: '#f7f3fd',
  TEXT: '#bababa',
  BORDER: '#9e9e9e',
  INPUT_BG: '#282828',
  BACKGROUND: '#1a1a1a',
  ERROR: '#fc0021',
  WARNING: '#ffea36',
  SUCCESS: '#7dbe31',
};

const light = {
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
  colors: {
    text: colors.BLACK,
    background: colors.WHITE,
    success: colors.SUCCESS,
    error: colors.ERROR,
    info: colors.PRIMARY,
  },
};

const dark = {
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
  colors: {
    text: colors.WHITE,
    background: colors.BLACK,
    success: colors.SUCCESS,
    error: colors.ERROR,
    info: colors.PRIMARY,
  },
};

export const fonts = {
  ASTRO_SPACE: 'aAstroSpace',

  POPPINS_BOLD: 'Poppins-Bold',
  POPPINS_THIN: 'Poppins-Thin',
  POPPINS_BLACK: 'Poppins-Black',
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_MEDIUM: 'Poppins-Medium',
  POPPINS_REGULAR: 'Poppins-Regular',
  POPPINS_SEMI_BOLD: 'Poppins-SemiBold',
  POPPINS_EXTRA_BOLD: 'Poppins-ExtraBold',
  POPPINS_BOLD_ITALIC: 'Poppins-BoldItalic',
  POPPINS_EXTRA_LIGHT: 'Poppins-ExtraLight',
  POPPINS_THIN_ITALIC: 'Poppins-ThinItalic',
  POPPINS_BLACK_ITALIC: 'Poppins-BlackItalic',
  POPPINS_LIGHT_ITALIC: 'Poppins-LightItalic',
  POPPINS_MEDIUM_ITALIC: 'Poppins-MediumItalic',
  POPPINS_REGULAR_ITALIC: 'Poppins-RegularItalic',
  POPPINS_SEMI_BOLD_ITALIC: 'Poppins-SemiBoldItalic',
  POPPINS_EXTRA_BOLD_ITALIC: 'Poppins-ExtraBoldItalic',
  POPPINS_EXTRA_LIGHT_ITALIC: 'Poppins-ExtraLightItalic',
};

export default { light, dark };
