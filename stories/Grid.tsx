import classNames from 'classnames';
import React, { ElementType, ReactNode } from 'react';
import { AlignItems, JustifyContent, Layout } from './constants';

import styles from './Grid.scss';

export interface Gap {
  row: number;
  column: number;
}

export interface GridProps {
  [key: string]: any;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  children: ReactNode;
  className?: string;
  layout: Layout;
  gap?: number | Gap;
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
  const normalizedGap: Gap = typeof(gap) === 'number' ? {
    column: gap,
    row: gap,
  } : {
    column: gap.column,
    row: gap.row,
  };
  return (
    <Type
      className={classNames(
        styles.grid,
        styles[layout],
        className,
      )}
      style={{
        alignItems,
        columnGap: `${normalizedGap.column}px`,
        rowGap: `${normalizedGap.row}px`,
        justifyContent,
      }}
      {...props}
    >
      {children}
    </Type>
  );
}
