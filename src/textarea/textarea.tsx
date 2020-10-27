import React, {
  ChangeEvent,
  forwardRef, Ref,
  TextareaHTMLAttributes,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';

import {
  getSizeClass,
  getSkinClass, getThemeClass,
  IInputProps,
  InputSize,
  InputSkin,
  InputTheme,
} from '../input-models';

import styles from './textarea.scss';

// Sync with kit values of line-height
const lineHeightValue = {
  [InputSize.s]: 20,
  [InputSize.m]: 22,
  [InputSize.l]: 24,
  [InputSize.xl]: 28,
};

export type IProps = {
  isAutoGrowable?: boolean;
  initialRow?: number;
  minRows?: number;
  maxRows?: number;
} & IInputProps
  & TextareaHTMLAttributes<HTMLTextAreaElement>;

function Textarea(props: IProps, ref: Ref<HTMLTextAreaElement | null>) {
  const {
    size = InputSize.s,
    theme = InputTheme.default,
    skin = InputSkin.default,
    isInvalid = false,
    isAutoGrowable = true,
    initialRow = 1,
    minRows = 1,
    maxRows = Infinity,
    onChange,
    className,
    ...otherProps } = props;
  const [rows, setRows] = useState(initialRow);
  const innerRef = useRef<HTMLTextAreaElement>(null);

  // Maybe we want to use use-callback-ref or some specific hook for merge refs
  useImperativeHandle(ref, () => innerRef.current);

  const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = lineHeightValue[size];

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows > previousRows) {
      event.target.scrollTop = event.target.scrollHeight;
    }

    setRows(currentRows < maxRows ? currentRows : maxRows);
    onChange && onChange(event);
  }, [rows]);

  const classes = classNames({
    [styles.isAutogrowable]: isAutoGrowable,
    [styles.isInvalid]: isInvalid,
  },
    styles.textarea,
    getSizeClass(styles)(size),
    getThemeClass(styles)(theme),
    getSkinClass(styles)(skin),
    className,
  );

  return (
    <textarea
      {...otherProps}
      ref={innerRef}
      onChange={handleChange}
      rows={rows}
      className={classes}/>
  );
}

export default forwardRef(Textarea);
