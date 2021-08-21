import React, { ReactNode } from 'react';

import styles from './Actions.scss';

export interface ActionsProps {
  primary?: ReactNode;
  secondary?: ReactNode;
}

export function Actions({
  primary,
  secondary,
}: ActionsProps): JSX.Element {
  return (
    <div className={styles.actions}>
      {secondary && (
        <div className={styles.secondary}>{secondary}</div>
      )}
      {primary && (
        <div className={styles.primary}>{primary}</div>
      )}
    </div>
  );
}
