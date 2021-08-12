import React, { FunctionComponent, ReactNode } from 'react';

import styles from './actions.scss';

export interface ActionsProps {
  primary?: ReactNode;
  secondary?: ReactNode;
}

export const Actions: FunctionComponent<ActionsProps> = ({
  primary,
  secondary,
}: ActionsProps) => {
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
};
