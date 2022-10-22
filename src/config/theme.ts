import { heightConverter, heightPercentageToDP } from "../utils";

export interface ColorTypes {
  primary: string;
  secondary: string;
  ternary: string;
  accentPrimary: string;
  accentSecondary: string;
  secondaryText : string;
  error: string;
  success: string;
  dark: string;
  light: string;
  lightGrey: string;
  darkGrey: string;
  black :string;
}

export const colors: ColorTypes = {
  primary: '#F87E31',
  secondary: '#f9f9f9',
  secondaryText: '#909090',
  ternary: '#ffffff',
  accentPrimary: '#F1F1F1',
  accentSecondary: '#F1F1F1',
  error: '#ff0033',
  success: '#22bb33',
  dark: '#282828',
  light: '#ffffff',
  lightGrey: '#A7A7A7',
  darkGrey: '#434343',
  black : "#000000",
};

export interface SpacingTypes {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  ml: number;
  xl: number;
  dl:number;
  xxl: number;
  xxxl:number;
  xxxxl: number
  xxxxl2 : number,
  xxxxxl: number,
}

export const spacings: SpacingTypes = {
  xxs: heightPercentageToDP(0.4),
  xs: heightPercentageToDP(0.8),
  sm: heightPercentageToDP(1.5),
  md: heightPercentageToDP(2.0),
  lg: heightPercentageToDP(3.5),
  dl: heightPercentageToDP(7.0),
  xl: heightPercentageToDP(5.0),
  ml: heightPercentageToDP(6.5),
  xxl: heightPercentageToDP(8.0),
  xxxl: heightPercentageToDP(12.0),
  xxxxl: heightPercentageToDP(15.0),
  xxxxl2:heightPercentageToDP(16.0),
  xxxxxl: heightPercentageToDP(18.0),


};

export interface typographyTypes {
  h1: {};
  h2: {};
  h3: {};
  h4: {};
  p1: {};
  p2: {};
  p3: {};
  p4: {};
  p5: {};
  p6:{};
}

export const typography: typographyTypes = {
  h1: {
    fontSize: heightPercentageToDP(3.6),

  },
  h2: {
    fontSize: heightPercentageToDP(3.0),

  },
  h3: {
    fontSize: heightPercentageToDP(2.6),

  },
  h4: {
    fontSize: heightPercentageToDP(2.4),

  },
  p1: {
    fontSize: heightPercentageToDP(2.5),

  },
  p2: {
    fontSize: heightPercentageToDP(2.0),
   
  },
  p3: {
    fontSize: heightPercentageToDP(2.2),

  },
  p4: {
    fontSize: heightPercentageToDP(1.8),
   
  },
  p5: {
    fontSize: heightPercentageToDP(1.6),

  },
  p6: {
    fontSize: heightPercentageToDP(1.4),

  },
};
