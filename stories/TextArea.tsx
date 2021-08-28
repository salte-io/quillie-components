import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Keys, UpdateOn } from './constants';
import { noop } from './utils/noop';
import styles from './TextArea.scss';

export interface TextAreaProps {
  className?: string,
  value?: string;
  placeholder?: string;
  rows?: number;

  /**
   * Invoked when the checkbox checked value is modified internally.
   */
  onChange?: (value: string) => void;
  submitKeys?: Keys[];

  updateOn?: UpdateOn;
}

export function TextArea({
  className,
  value,
  placeholder,
  onChange = noop,
  updateOn = UpdateOn.Blur,
}: TextAreaProps): JSX.Element {
  const [internalValue, setInternalValue] = useState<string>();

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <div
      className={classNames(
        styles.textArea,
        className,
      )}
    >
      <textarea
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
      />
    </div>
  );
}
