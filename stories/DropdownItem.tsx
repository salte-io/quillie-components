import classNames from 'classnames';
import React, { ElementType, ReactNode } from 'react';

import styles from './Dropdown.scss';

export interface DropdownProps {
  [key: string]: any;
  children: ReactNode;
  type?: ElementType;
}

export function DropdownItem({
  children,
  type: Type = 'div',
  ...props
}: DropdownProps): JSX.Element {
  const isClickable = Type === 'a' || props.onClick || props.href || props.to;

  return (
    <Type
      className={classNames(
        styles.dropdownItem,
        isClickable && styles.clickable,
      )}
      {...props}
    >
      {children}
    </Type>
  );
}
