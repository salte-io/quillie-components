import classNames from 'classnames';
import React from 'react';
import { Theme } from './constants';

import styles from './Separator.scss';

export interface SeparatorProps {
  [key: string]: any;
  className?: string;
  theme?: Theme;
  thin?: boolean;
}

export function Separator({
  className,
  theme = Theme.Primary,
  thin = false,
  ...props
}: SeparatorProps): JSX.Element {
  return (
    <div
      className={classNames(
        styles.separator,
        styles[theme],
        thin && styles.thin,
        className,
      )}
      {...props}
    />
  );
}
