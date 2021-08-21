import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './Checkbox.scss';

export interface CheckboxProps {
  /**
   * Used to update the internal checked value.
   */
  checked?: boolean;

  className?: string;

  /**
   * Disables the component.
   */
  disabled?: boolean;

  /**
   * Invoked when the checkbox checked value is modified internally.
   */
  onChange?: (change: boolean) => void;
}

export function Checkbox({
  checked = false,
  className,
  disabled = false,
  onChange,
}: CheckboxProps): JSX.Element {
  const [internallyChecked, setInternallyChecked] = useState<boolean>(false);

  useEffect(() => {
    setInternallyChecked(checked);
  }, [checked]);

  const updateValue = () => {
    const updatedChecked = !internallyChecked;
    setInternallyChecked(updatedChecked);
    if (onChange) onChange(updatedChecked);
  }

  return (
    <div
      className={classNames(
        styles.checkbox,
        internallyChecked && styles.checked,
        disabled && styles.disabled,
        className,
      )}
      onClick={updateValue}
    >
      <div className={styles.check} />
    </div>
  );
}
