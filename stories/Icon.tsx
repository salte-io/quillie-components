import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { FaFacebookF, FaTwitter, FaShare, FaHeart } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import styles from './Icon.scss';

export const ICON_MAP = {
  plus: GoPlus,
  facebook: FaFacebookF,
  twitter: FaTwitter,
  share: FaShare,
  delete: MdDelete,
  heart: FaHeart,
};

export interface IconProps {
  className?: string;
  icon: keyof typeof ICON_MAP;
}

export const Icon: FunctionComponent<IconProps> = ({
  className,
  icon,
  ...props
}: IconProps) => {
  const MappedIcon = ICON_MAP[icon];

  return (
    <MappedIcon
      className={classNames(
        styles.icon,
        className,
      )}
      {...props}
    />
  )
};
