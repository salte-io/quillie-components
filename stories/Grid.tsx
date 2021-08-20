import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';
import { Layout } from './constants';

import styles from './Grid.scss';

export interface GridProps {
  children: ReactNode;
  className?: string;
  layout?: Layout;
  spacing?: number;
}

export const Grid: FunctionComponent<GridProps> = ({
  children,
  className,
  layout = Layout.Vertical,
  spacing = 10,
}: GridProps) => {
  return (
    <div
      className={classNames(
        styles.grid,
        styles[layout],
        className,
      )}
      style={{ gap: `${spacing}px` }}
    >
      {children}
    </div>
  );
};
