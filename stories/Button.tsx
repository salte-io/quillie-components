import classNames from 'classnames';
import React, { Component, FunctionComponent, ReactNode } from 'react';
import styles from './Button.scss';
import { Theme } from './constants';
import { Spinner } from './Spinner';

export interface ButtonProps {
  [key: string]: any;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  inverse?: boolean;
  loading?: boolean;
  onClick?: () => void;
  theme?: Theme;
  type?: string | FunctionComponent | typeof Component;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  disabled = false,
  inverse = false,
  loading = false,
  onClick,
  theme = Theme.Primary,
  type: Type = 'button',
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <Type
      type='button'
      className={classNames(
        styles.button,
        styles[theme],
        isDisabled && styles.disabled,
        loading && styles.loading,
        inverse && styles.inverse,
        className,
      )}
      onClick={() => {
        if (!isDisabled) onClick()
      }}
      {...props}
    >
      <div className={styles.content}>
        {children}
      </div>
      <Spinner loading={loading} />
    </Type>
  );
};
