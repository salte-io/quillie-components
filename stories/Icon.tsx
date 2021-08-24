import classNames from 'classnames';
import React from 'react';
import * as ReactIcons from 'react-icons';
import { FaFacebookF, FaTwitter, FaShare, FaHeart } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { MdDelete, MdClear } from 'react-icons/md';
import { IoMdMegaphone, IoMdNotifications } from 'react-icons/io';
import styles from './Icon.scss';

export enum IconType {
  Plus = 'plus',
  Facebook = 'facebook',
  Twitter = 'twitter',
  Share = 'share',
  Delete = 'delete',
  Heart = 'heart',
  Clear = 'clear',
  Feedback = 'feedback',
  Notification = 'notification',
  Info = 'info',
}

const ICON_MAP: {
  [key in IconType]: ReactIcons.IconType;
} = {
  plus: GoPlus,
  facebook: FaFacebookF,
  twitter: FaTwitter,
  share: FaShare,
  delete: MdDelete,
  heart: FaHeart,
  clear: MdClear,
  feedback: IoMdMegaphone,
  notification: IoMdNotifications,
  info: BsFillInfoCircleFill,
};

export interface IconProps {
  [key: string]: any;
  className?: string;
  icon: IconType;
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
