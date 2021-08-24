import classNames from 'classnames';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Alignment, Layout, Theme } from './constants';

import styles from './Dropdown.scss';
import { Grid } from './Grid';

export interface DropdownProps {
  align: Alignment;
  button: ReactNode;
  children: ReactNode;
  theme?: Theme;
}

export function Dropdown({
  align,
  button,
  children,
  theme = Theme.Primary,
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
      )}
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
      >
        {children}
      </Grid>
    </div>
  );
}

export { DropdownItem } from './DropdownItem';
