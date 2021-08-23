import classNames from 'classnames';
import React from 'react';
import { Theme } from './constants';

import styles from './Spinner.scss';

export interface SpinnerProps {
  className?: string;
  loading?: boolean;
  fit?: boolean;
  theme?: Theme;
}

export function Spinner({
  className,
  loading = false,
  fit = false,
  theme = Theme.Primary,
}: SpinnerProps): JSX.Element {
  return (
    <div
      className={classNames(
        styles.spinner,
        loading && styles.loading,
        fit && styles.fit,
        styles[theme],
        className,
      )}
    />
  );
}
