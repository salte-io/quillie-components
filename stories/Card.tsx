import classNames from 'classnames';
import React, { ElementType, ReactNode } from 'react';
import styles from './Card.scss';
import { Layout, Theme } from './constants';
import { Gap, Grid } from './Grid';
import { Spinner } from './Spinner';

export interface CardProps {
  [key: string]: any;
  children?: ReactNode;
  className?: string;
  layout?: Layout;
  loading?: boolean;
  gap?: number | Gap;
  type?: ElementType;
}

export function Card({
  children,
  className,
  layout = Layout.Vertical,
  loading = false,
  gap,
  type: Type = 'div',
  ...props
}: CardProps): JSX.Element {
  return (
    <Type
      className={classNames(
        styles.card,
        props.href || props.to || props.onClick ? styles.clickable : null,
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
        fit
        loading={loading}
        theme={Theme.PrimaryAccent}
      />
    </Type>
  );
}
