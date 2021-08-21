import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './Card.scss';
import { Layout } from './constants';
import { Grid } from './Grid';

export interface CardProps {
  children?: ReactNode;
  className?: string;
  layout?: Layout;
}

export function Card({
  children,
  className,
  layout = Layout.Vertical,
  ...props
}: CardProps): JSX.Element {
  return (
    <Grid
      className={classNames(
        styles.card,
        className
      )}
      layout={layout}
      {...props}
    >
      {children}
    </Grid>
  );
}
