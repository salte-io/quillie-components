import classNames from 'classnames';
import React, { ReactNode, useEffect, useState } from 'react';
import { Alignment } from './constants';

import styles from './Tooltip.scss';

export interface TooltipProps {
  align?: Alignment;
  children: ReactNode;
  id: string;
}

export interface TooltipState {
  visible: boolean;
}

export function Tooltip({
  align = Alignment.Right,
  children,
  id,
}: TooltipProps): JSX.Element {
  const [visible, setVisible] = useState<boolean>();

  useEffect(() => {
    const element = document.querySelector<HTMLElement>(`[data-tooltip="${id}"]`);

    if (visible) {
      element.addEventListener('mouseleave', () => {
        setVisible(false);
      }, {
        once: true,
        passive: true,
      });
    } else {
      element.addEventListener('mouseenter', () => {
        setVisible(true);
      }, {
        once: true,
        passive: true,
      });
    }
  }, [visible]);


  return (
    <div
      className={classNames(
        styles.tooltip,
        styles[align],
        visible && styles.visible,
      )}
    >
      {children}
    </div>
  );
}

let identifier = 0;
export function getTooltipIdentifier(): string {
  return `quillie-tooltip-${identifier++}`;
}
