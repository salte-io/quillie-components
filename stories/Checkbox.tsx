import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './Checkbox.scss';
import { Checked } from './constants';

export interface CheckboxProps {
  /**
   * Used to update the internal checked value.
   */
  checked?: boolean | Checked;

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
  const [internallyChecked, setInternallyChecked] = useState<Checked>(Checked.Unchecked);

  useEffect(() => {
    if (typeof(checked) === 'boolean') {
      setInternallyChecked(checked ? Checked.Checked : Checked.Unchecked);
    } else {
      setInternallyChecked(checked);
    }
  }, [checked]);

  const updateValue = () => {
    const isChecked = [Checked.Unchecked, Checked.Indeterminate].includes(internallyChecked);
    setInternallyChecked(isChecked ? Checked.Checked : Checked.Unchecked);
    if (onChange) onChange(isChecked);
  }

  return (
    <div
      className={classNames(
        styles.checkbox,
        styles[internallyChecked],
        disabled && styles.disabled,
        className,
      )}
      onClick={updateValue}
    >
      <div className={styles.check} />
    </div>
  );
}
