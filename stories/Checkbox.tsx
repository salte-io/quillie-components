import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './checkbox.scss';

export interface CheckboxProps {
  /**
   * Used to update the internal checked value.
   */
  checked?: boolean;

  /**
   * Disables the component.
   */
  disabled?: boolean;

  /**
   * Invoked when the checkbox checked value is modified internally.
   */
  onChange?: (change: boolean) => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  checked = false,
  disabled = false,
  onChange,
}: CheckboxProps) => {
  const [internallyChecked, setInternallyChecked] = useState<boolean>(false);

  useEffect(() => {
    setInternallyChecked(checked);
  }, [checked]);

  const updateValue = () => {
    setInternallyChecked(!internallyChecked);
    if (onChange) onChange(internallyChecked);
  }

  return (
    <div
      className={classNames(
        styles.checkbox,
        internallyChecked && styles.checked,
        disabled && styles.disabled,
      )}
      onClick={updateValue}
    >
      <div className={styles.check} />
    </div>
  );
};
