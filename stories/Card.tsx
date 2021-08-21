import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './Card.scss';
import { Layout } from './constants';
import { Grid } from './Grid';
import { Spinner } from './Spinner';

export interface CardProps {
  children?: ReactNode;
  className?: string;
  layout?: Layout;
  loading?: boolean;
}

export function Card({
  children,
  className,
  layout = Layout.Vertical,
  loading = false,
  ...props
}: CardProps): JSX.Element {
  return (
    <div
      className={classNames(
        styles.card,
        loading && styles.loading,
      )}
      {...props}
    >
      <Grid
        className={classNames(
          styles.content,
          className,
        )}
        layout={layout}
      >
        {!loading && children}
      </Grid>
      <Spinner
        className={styles.spinner}
        loading={loading}
      />
    </div>
  );
}
