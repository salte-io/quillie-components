import classNames from 'classnames';
import React, { ChangeEventHandler, FunctionComponent, useEffect, useState } from 'react';
import styles from './input.scss';

export interface InputProps {
  value?: string;
  placeholder?: string;

  /**
   * Invoked when the checkbox checked value is modified internally.
   */
  onChange?: (change: string) => void;
}

export const Input: FunctionComponent<InputProps> = ({
  value,
  placeholder,
  onChange,
}: InputProps) => {
  const [internalValue, setInternalValue] = useState<string>();

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const updateValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInternalValue(event.target.value);
    if (onChange) onChange(internalValue);
  }

  return (
    <div
      className={classNames(
        styles.input
      )}
    >
      <input
        value={internalValue || ''}
        placeholder={placeholder}
        onChange={updateValue}
      />
    </div>
  );
};
