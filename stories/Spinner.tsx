import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import styles from './Spinner.scss';

export interface SpinnerProps {
  className?: string;
  loading?: boolean;
}

export const Spinner: FunctionComponent<SpinnerProps> = ({
  className,
  loading = false,
}: SpinnerProps) => {
  return (
    <div
      className={classNames(
        styles.spinner,
        loading && styles.loading,
        className,
      )}
    />
  );
};
