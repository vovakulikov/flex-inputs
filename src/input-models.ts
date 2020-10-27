
export type IInputProps = {
  size?: InputSize | keyof typeof InputSize,
  theme?: InputTheme | keyof typeof InputTheme,
  skin?: InputSkin | keyof typeof InputSkin,
  isInvalid?: boolean;
};

export enum InputSize {
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export enum InputSkin {
  default = 'default',
  light = 'light',
  invisible = 'invisible',
}

export enum InputTheme {
  default= 'default',
  dark= 'dark',
}

export const getSizeClass = (styles: any) => (size: keyof typeof InputSize) => {
  const sizeClasses = {
    [InputSize.s]: styles.sizeS,
    [InputSize.m]: '',
    [InputSize.l]: styles.sizeL,
    [InputSize.xl]: styles.sizeXl,
  };

  return sizeClasses[size];
};

export const getSkinClass = (styles: any) => (skin: keyof typeof InputSkin) => {
  const skinClasses = {
    [InputSkin.default]: styles.skinDefault,
    [InputSkin.light]: styles.skinLight,
    [InputSkin.invisible]: styles.skinInvisible,
  };

  return skinClasses[skin];
};

export const getThemeClass = (styles: any) => (theme: keyof typeof InputTheme) => {
  const themeClasses = {
    [InputTheme.dark]: styles.themeDark,
    [InputTheme.default]: '',
  };

  return themeClasses[theme];
};
