import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';
import { Component } from 'react';
import { AlignItems, JustifyContent, Layout } from './constants';

import styles from './Grid.scss';

export interface GridProps {
  [key: string]: any;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  children: ReactNode;
  className?: string;
  layout?: Layout;
  gap?: number;
  type?: string | FunctionComponent | typeof Component;
}

export const Grid: FunctionComponent<GridProps> = ({
  alignItems,
  justifyContent,
  children,
  className,
  layout = Layout.Vertical,
  gap = 10,
  type: Type = 'div',
  ...props
}: GridProps) => {
  return (
    <Type
      className={classNames(
        styles.grid,
        styles[layout],
        className,
      )}
      style={{
        alignItems,
        gap: `${gap}px`,
        justifyContent,
      }}
      {...props}
    >
      {children}
    </Type>
  );
};
