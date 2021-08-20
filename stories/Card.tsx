import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Card.scss';
import { Layout } from './constants';
import { Grid } from './Grid';

export interface CardProps {
  children?: ReactNode;
  className?: string;
  layout?: Layout;
}

export const Card: FunctionComponent<CardProps> = ({
  children,
  className,
  layout = Layout.Vertical,
  ...props
}: CardProps) => {
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
};
