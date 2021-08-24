import classNames from 'classnames';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Alignment, Layout, Theme } from './constants';

import styles from './Dropdown.scss';
import { Grid } from './Grid';

export interface DropdownProps {
  [key: string]: any;
  align: Alignment;
  button: ReactNode;
  children: ReactNode;
  className?: string;
  width?: number;
  theme?: Theme;
}

export function Dropdown({
  align,
  button,
  children,
  className,
  theme = Theme.Primary,
  width = 200,
  ...props
}: DropdownProps): JSX.Element {
  const elementRef = useRef<HTMLDivElement>();
  const listenerRef = useRef<(event: MouseEvent) => void>();
  const [visible, setVisible] = useState<boolean>();

  useEffect(() => {
    if (visible) {
      listenerRef.current = (event: MouseEvent): void => {
        const path = event.composedPath();
        if (!path.includes(elementRef.current)) {
          setVisible(false);
        }
      };

      window.addEventListener('click', listenerRef.current, {
        passive: true,
      });
    } else if (listenerRef.current) {
      window.removeEventListener('click', listenerRef.current);
      listenerRef.current = null;
    }

    return () => {
      if (listenerRef.current) {
        window.removeEventListener('click', listenerRef.current);
      }
    }
  }, [visible]);

  return (
    <div
      ref={elementRef}
      className={classNames(
        styles.dropdown,
        styles[align],
        styles[theme],
        visible && styles.visible,
        className,
      )}
      {...props}
    >
      <div
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {button}
      </div>
      <Grid
        className={styles.list}
        gap={0}
        layout={Layout.Vertical}
        style={{
          minWidth: width,
        }}
      >
        {children}
      </Grid>
    </div>
  );
}

export { DropdownItem } from './DropdownItem';
