import classNames from 'classnames';
import React, { ElementType, ReactNode } from 'react';
import { AlignItems, JustifyContent, Layout } from './constants';

import styles from './Grid.scss';

export interface GridProps {
  [key: string]: any;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  children: ReactNode;
  className?: string;
  layout: Layout;
  gap?: number;
  type?: ElementType;
}

export function Grid({
  alignItems,
  justifyContent,
  children,
  className,
  layout,
  gap = 10,
  type: Type = 'div',
  ...props
}: GridProps): JSX.Element {
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
}
