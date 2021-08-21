import classNames from 'classnames';
import React from 'react';

import styles from './Spinner.scss';

export interface SpinnerProps {
  className?: string;
  loading?: boolean;
}

export function Spinner({
  className,
  loading = false,
}: SpinnerProps): JSX.Element {
  return (
    <div
      className={classNames(
        styles.spinner,
        loading && styles.loading,
        className,
      )}
    />
  );
}
