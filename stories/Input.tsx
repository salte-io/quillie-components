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
  onChange: (value: string) => void;

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
        onBlur={updateOn === UpdateOn.Blur ? () => onChange(internalValue) : null}
        onChange={(event) => {
          const updatedValue = event.target.value;
          setInternalValue(updatedValue);

          if (updateOn === UpdateOn.Input) {
            onChange(updatedValue);
          }
        }}
        onKeyDown={updateOn === UpdateOn.Blur ? (event) => {
          if (event.key !== 'Enter') return;

          onChange(internalValue);
        } : null}
      />
    </div>
  );
}
