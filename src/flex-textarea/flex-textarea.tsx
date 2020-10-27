import React, {
  ChangeEventHandler,
  FormEventHandler, forwardRef,
  KeyboardEventHandler, Ref,
  useEffect, useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames';

import Textarea from '../textarea/textarea';

import {
  getSizeClass,
  getSkinClass,
  getThemeClass,
  IInputProps,
  InputSize,
  InputSkin,
  InputTheme,
} from '../input-models';
import styles from './flex-textarea.scss';

export type IProps = {
  value: string;
  placeholder?: string;
  maxTextLength?: number;
  indentation?: number;
  isAutoFocused?: boolean;
  isSpellChecked?: boolean;
  isReadonly?: boolean;
  controlId?: string;
  minHeight?: number;
  maxLength?: number,
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>,
  onChange: ChangeEventHandler<HTMLTextAreaElement>,
  onInput?: FormEventHandler<HTMLTextAreaElement>,
  onFocus?: FormEventHandler<HTMLTextAreaElement>,
  onBlur?: FormEventHandler<HTMLTextAreaElement>,
  className?: string;
} & IInputProps;

function FlexTextArea(props: IProps, forwardRef: Ref<HTMLTextAreaElement | null>) {
  const {
    value = '',
    placeholder = '',
    isAutoFocused = false,
    indentation = null,
    isReadonly = false,
    isInvalid = false,
    maxLength,
    isSpellChecked,
    skin = InputSkin.default,
    size = InputSize.m,
    theme = InputTheme.default,
    controlId,
    minHeight = null,
    className = '',
    onChange,
    onKeyDown,
    onInput,
    onFocus,
    onBlur
  } = props;

  const ref = useRef<HTMLTextAreaElement>(null);
  
  useImperativeHandle(forwardRef, () => ref.current);

  // TODO use useFocusMe instead
  useEffect(() => {
    if (isAutoFocused) {
      ref.current?.focus();
    }
  }, [isAutoFocused]);

  const ghostText = useMemo(() => {
    return value.length > 0
      ? `${value}\u200B` // zero space symbol for cases when line ends with /r or /n
      : placeholder;
  }, [value, placeholder]);

  const rootClassName = classNames(
    getSizeClass(styles)(size),
    getThemeClass(styles)(theme),
    getSkinClass(styles)(skin),
    styles.flexTextarea,
    className,
  );

  return (
    <div
      style={{ minHeight: minHeight != null ? `${minHeight}px` : undefined }}
      className={rootClassName}>

      <Textarea
        ref={ref}
        value={value}
        id={controlId}
        skin={skin}
        size={size}
        theme={theme}
        spellCheck={isSpellChecked}
        maxLength={maxLength}
        placeholder={placeholder}
        readOnly={isReadonly}
        isInvalid={isInvalid}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
        style={{ paddingLeft: indentation !== null ? `${indentation}px` : undefined }}
        className={styles.textField} />

      <div
        className={styles.textFieldGhost}>
          { ghostText }
      </div>
    </div>
  );
}

export default forwardRef<HTMLTextAreaElement, IProps>(FlexTextArea);
