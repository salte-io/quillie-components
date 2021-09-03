import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './Checkbox.scss';
import { noop } from './utils/noop';
import { Checked, Theme } from './constants';

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

  theme?: Theme,

  /**
   * Invoked when the checkbox checked value is modified internally.
   */
  onChange?: (change: boolean) => void;
}

export function Checkbox({
  checked = false,
  className,
  disabled = false,
  theme = Theme.SecondaryAccent,
  onChange = noop,
}: CheckboxProps): JSX.Element {
  const [internallyChecked, setInternallyChecked] = useState<Checked>(Checked.Unchecked);

  useEffect(() => {
    if (typeof(checked) === 'boolean') {
      setInternallyChecked(checked ? Checked.Checked : Checked.Unchecked);
    } else {
      setInternallyChecked(checked);
    }
  }, [checked]);

  const updateValue = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const isChecked = [Checked.Unchecked, Checked.Indeterminate].includes(internallyChecked);
    setInternallyChecked(isChecked ? Checked.Checked : Checked.Unchecked);
    onChange(isChecked);
  }

  return (
    <div
      className={classNames(
        styles.checkbox,
        styles[internallyChecked],
        styles[theme],
        disabled && styles.disabled,
        className,
      )}
      onClick={updateValue}
    >
      <div className={styles.check} />
    </div>
  );
}
