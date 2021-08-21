import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { UpdateOn } from './constants';
import styles from './Input.scss';

export interface InputProps {
  className?: string,
  value?: string;
  placeholder?: string;

  /**
   * Invoked when the checkbox checked value is modified internally.
   */
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;

  updateOn?: UpdateOn;
}

export function Input({
  className,
  value,
  placeholder,
  onChange,
  updateOn = UpdateOn.Blur,
}: InputProps): JSX.Element {
  const [internalValue, setInternalValue] = useState<string>();

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const updateValue = (event, fn: (value: string) => void) => {
    const updatedValue = event.target.value;
    if (updatedValue === internalValue) return;

    setInternalValue(updatedValue);
    if (fn) fn(updatedValue);
  }

  return (
    <div
      className={classNames(
        styles.input,
        className,
      )}
    >
      <input
        placeholder={placeholder}
        value={internalValue || ''}
        onBlur={updateOn === UpdateOn.Blur ? (event) => updateValue(event, onChange) : null}
        onInput={updateOn === UpdateOn.Input ? (event) => updateValue(event, onChange) : null}
        onKeyDown={updateOn === UpdateOn.Blur ? (event) => {
          if (event.key !== 'Enter') return;

          updateValue(event, onChange);
        } : null}
      />
    </div>
  );
}
