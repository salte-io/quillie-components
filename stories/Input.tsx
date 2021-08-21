import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
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
}

export function Input({
  className,
  value,
  placeholder,
  onChange,
  onBlur,
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
        onBlur={(event) => updateValue(event, onBlur)}
        onChange={(event) => updateValue(event, onChange)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            updateValue(event, onBlur);
          }
        }}
      />
    </div>
  );
}
