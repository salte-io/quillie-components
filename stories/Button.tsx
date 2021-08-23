import classNames from 'classnames';
import React, { ElementType, ReactNode } from 'react';
import styles from './Button.scss';
import { AlignItems, Layout, Theme } from './constants';
import { Grid } from './Grid';
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
  type?: ElementType;
}

/**
 * Primary UI component for user interaction
 */
export function Button({
  children,
  className,
  disabled = false,
  inverse = false,
  loading = false,
  onClick,
  theme = Theme.Primary,
  type: Type = 'button',
  ...props
}: ButtonProps): JSX.Element {
  const isDisabled = disabled || loading;

  return (
    <Type
      className={classNames(
        styles.button,
        styles[theme],
        isDisabled && styles.disabled,
        loading && styles.loading,
        inverse && styles.inverse,
        className,
      )}
      layout={Layout.Horizontal}
      type={'button'}
      onClick={() => {
        if (!isDisabled) onClick()
      }}
      {...props}
    >
      <Grid
        alignItems={AlignItems.Center}
        className={styles.content}
        gap={5}
        layout={Layout.Horizontal}
      >
        {children}
      </Grid>
      <Spinner
        fit
        loading={loading}
        theme={Theme.PrimaryAccent}
      />
    </Type>
  );
}
