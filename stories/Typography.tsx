import React, { ElementType, ReactNode } from 'react';
import styles from './Typography.scss';
import classNames from 'classnames';
import { Theme } from './constants';

export enum TypographyStyles {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  Body = 'body',
}

export interface TypographyProps {
  [key: string]: any;
  children: ReactNode;
  className?: string;
  style?: TypographyStyles;
  theme?: Theme;
  type?: ElementType;
}

export function Typography({
  children,
  className,
  style = TypographyStyles.Body,
  theme = Theme.Secondary,
  type: Type = 'div',
  ...props
}: TypographyProps): JSX.Element {
  return (
    <Type
      className={classNames(
        styles.typography,
        styles[theme],
        styles[style],
        className
      )}
      {...props}
    >
      {children}
    </Type>
  );
}
