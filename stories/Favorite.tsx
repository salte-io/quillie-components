import React, { useEffect, useState } from 'react';
import { Icon } from './Icon';

import styles from './Favorite.scss';
import classNames from 'classnames';

export interface FavoriteProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

export function Favorite({
  checked,
  onChange,
}: FavoriteProps): JSX.Element {
  const [internallyChecked, setInternallyChecked] = useState<boolean>();

  useEffect(() => {
    setInternallyChecked(checked);
  }, [checked]);

  return (
    <div
      className={classNames(
        styles.favorite,
        internallyChecked && styles.checked,
      )}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();

        const updatedChecked = !internallyChecked;
        setInternallyChecked(updatedChecked);
        if (onChange) onChange(updatedChecked);
      }}
    >
      <Icon
        icon={'heart'}
      />
      <Icon
        className={styles.pseudoHover}
        icon={'heart'}
      />
      <div className={styles.fanfare} />
    </div>
  );
}
