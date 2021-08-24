import classNames from 'classnames';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Alignment, Layout } from './constants';

import styles from './Dropdown.scss';
import { Grid } from './Grid';
export { DropdownItem } from './DropdownItem';

export interface DropdownProps {
  align: Alignment;
  button: ReactNode;
  children: ReactNode;
}

export function Dropdown({
  align,
  button,
  children,
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
