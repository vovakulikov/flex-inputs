
export type IInputProps = {
  size?: InputSize,
  theme?: InputTheme,
  skin?: InputSkin,
  isInvalid?: boolean;
};

export enum InputSize {
  s,
  m,
  l,
  xl,
}

export enum InputSkin {
  default,
  light,
  invisible,
}

export enum InputTheme {
  default,
  dark,
}

export const getSizeClass = (styles: any) => (size: InputSize) => {
  const sizeClasses = {
    [InputSize.s]: styles.sizeS,
    [InputSize.m]: '',
    [InputSize.l]: styles.sizeL,
    [InputSize.xl]: styles.sizeXl,
  };

  return sizeClasses[size];
};

export const getSkinClass = (styles: any) => (skin: InputSkin) => {
  const skinClasses = {
    [InputSkin.default]: styles.skinDefault,
    [InputSkin.light]: styles.skinLight,
    [InputSkin.invisible]: styles.skinInvisible,
  };

  return skinClasses[skin];
};

export const getThemeClass = (styles: any) => (theme: InputTheme) => {
  const themeClasses = {
    [InputTheme.dark]: styles.themeDark,
    [InputTheme.default]: '',
  };

  return themeClasses[theme];
};
