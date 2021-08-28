import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Icon, IconType } from './Icon';
import { Tooltip, getTooltipIdentifier } from './Tooltip';

import styles from './Favorite.scss';
import { noop } from './utils/noop';
import { Alignment } from './constants';

export interface FavoriteProps {
  checked: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
  tooltip?: string;
}

export function Favorite({
  checked,
  className,
  onChange = noop,
  tooltip,
}: FavoriteProps): JSX.Element {
  const [hasBeenClicked, setHasBeenClicked] = useState<boolean>(false);
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
        className,
      )}
      data-tooltip={tooltipId}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();

        const updatedChecked = !internallyChecked;
        setInternallyChecked(updatedChecked);
        onChange(updatedChecked);
        setHasBeenClicked(true);
      }}
    >
      {tooltip && (
        <Tooltip
          align={Alignment.Right}
          id={tooltipId}
        >
          {tooltip}
        </Tooltip>
      )}
      <Icon
        icon={IconType.Heart}
      />
      <Icon
        className={styles.pseudoHover}
        icon={IconType.Heart}
      />
      <div
        className={styles.fanfare}
        style={{
          animationDuration: hasBeenClicked ? '1s' : '0s',
        }}
      />
    </div>
  );
}
