import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';
import styles from './card.scss';
import { Layout } from './constants';

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
    <div
      className={classNames(
        styles.card,
        styles[layout],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
