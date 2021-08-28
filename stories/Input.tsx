import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Keys, UpdateOn } from './constants';
import { noop } from './utils/noop';
import styles from './Input.scss';

export interface InputProps {
  className?: string,
  value?: string;
  placeholder?: string;

  /**
   * Invoked when the checkbox checked value is modified internally.
   */
  onChange?: (value: string) => void;
  submitKeys?: Keys[];

  updateOn?: UpdateOn;
}

export function Input({
  className,
  value,
  placeholder,
  onChange = noop,
  submitKeys = [Keys.Enter],
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
          if ((submitKeys as string[]).includes(event.key)) {
            event.preventDefault();

            onChange(internalValue);
          }
        } : null}
      />
    </div>
  );
}
