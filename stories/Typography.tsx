import React, { ElementType, ReactNode } from 'react';
import styles from './Typography.scss';
import classNames from 'classnames';
import { Theme } from './constants';

export function Typography({
  children,
  className,
  style = Typography.Styles.Body,
  theme = Theme.Secondary,
  type: Type = 'div',
  ...props
}: Typography.Props): JSX.Element {
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

export namespace Typography {
  export enum Styles {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    Body = 'body',
  }

  export interface Props {
    [key: string]: any;
    children: ReactNode;
    className: string;
    style?: Typography.Styles;
    theme?: Theme;
    type?: ElementType;
  }
}
