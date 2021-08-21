import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './Card.scss';
import { Layout } from './constants';
import { Gap, Grid } from './Grid';
import { Spinner } from './Spinner';

export interface CardProps {
  [key: string]: any;
  children?: ReactNode;
  className?: string;
  layout?: Layout;
  loading?: boolean;
  gap?: number | Gap;
}

export function Card({
  children,
  className,
  layout = Layout.Vertical,
  loading = false,
  gap,
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
        gap={gap}
        layout={layout}
      >
        {children}
      </Grid>
      <Spinner
        className={styles.spinner}
        loading={loading}
      />
    </div>
  );
}
