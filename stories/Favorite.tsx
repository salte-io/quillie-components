import React, { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { Tooltip, getTooltipIdentifier } from './Tooltip';

import styles from './Favorite.scss';
import classNames from 'classnames';
import { Alignment } from './constants';

export interface FavoriteProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  tooltip?: string;
}

export function Favorite({
  checked,
  onChange,
  tooltip,
}: FavoriteProps): JSX.Element {
  const [tooltipId] = useState<string>(() => getTooltipIdentifier())
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
      data-tooltip={tooltipId}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();

        const updatedChecked = !internallyChecked;
        setInternallyChecked(updatedChecked);
        if (onChange) onChange(updatedChecked);
      }}
    >
      {tooltip && (
        <Tooltip
          align={Alignment.Left}
          id={tooltipId}
        >
          {tooltip}
        </Tooltip>
      )}
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
