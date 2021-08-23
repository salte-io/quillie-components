import classNames from 'classnames';
import React from 'react';
import { FaFacebookF, FaTwitter, FaShare, FaHeart } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { MdDelete, MdClear } from 'react-icons/md';
import { IoMdMegaphone, IoMdNotifications } from 'react-icons/io';
import styles from './Icon.scss';

export const ICON_MAP = {
  plus: GoPlus,
  facebook: FaFacebookF,
  twitter: FaTwitter,
  share: FaShare,
  delete: MdDelete,
  heart: FaHeart,
  clear: MdClear,
  feedback: IoMdMegaphone,
  notification: IoMdNotifications,
};

export interface IconProps {
  className?: string;
  icon: keyof typeof ICON_MAP;
}

export function Icon({
  className,
  icon,
  ...props
}: IconProps): JSX.Element {
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
}
