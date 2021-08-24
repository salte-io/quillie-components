import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Position, Theme } from './constants';

import styles from './Toasts.scss';

let id = 0;

export interface ToastsProps {
  className?: string;
  position?: Position;
  theme?: Theme;
  offset?: number;
}

export function Toasts({
  className,
  position = Position.TopLeft,
  theme = Theme.Primary,
  offset = 10,
}: ToastsProps): JSX.Element {
  const [identifier] = useState<number>(() => id++);
  const [notifications, setNotifications] = useState<InternalNotification[]>([]);
  const [notificationIdentifier, setNotificationIdentifier] = useState<number>(0);

  useEffect(() => {
    Listen(identifier, (notification: Notification) => {
      const internalNotification: InternalNotification = {
        id: notificationIdentifier + 1,
        duration: 5000,
        ...notification,
      };

      setNotificationIdentifier(internalNotification.id);

      setNotifications((previousNotifications) => {
        return [
          ...previousNotifications,
          internalNotification,
        ];
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setTimeout((_) => {
        setNotifications((previousNotifications) => {
          const index = previousNotifications.findIndex((notification) => notification.id === internalNotification.id);
          if (index === -1) return previousNotifications;

          previousNotifications.splice(index, 1);
          return [...previousNotifications];
        })
      }, internalNotification.duration);
    });

    return () => {
      Unlisten(identifier);
    }
  }, []);

  const internalStyle = {
    top: position === Position.TopLeft || position === Position.TopRight ? offset : null,
    left: position === Position.TopLeft || position === Position.BottomLeft ? offset : null,
    right: position === Position.TopRight || position === Position.BottomRight ? offset : null,
    bottom: position === Position.BottomLeft || position === Position.BottomRight ? offset : null,
  };

  return (
    <div
      className={classNames(
        styles.toasts,
        styles[position],
        styles[theme],
        className,
      )}
      style={internalStyle}
    >
      {notifications.map((notification, index) => (
        <div key={index} className={styles.toast}>
          {notification.message}
        </div>
      ))}
    </div>
  );
}

const listeners: {
  [key: string]: Listener;
} = {};

type Listener = (toast: Notification) => void;
function Listen(id: number, listener: Listener): void {
  listeners[id] = listener;
}

function Unlisten(id: number): void {
  delete listeners[id];
}

export function AddToastNotification(notification: Notification): void {
  for (const id in listeners) {
    listeners[id](notification);
  }
}

interface Notification {
  duration?: number;
  message: string;
}

interface InternalNotification {
  id: number;
  duration: number;
  message: string;
}
