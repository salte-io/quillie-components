import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Theme } from './constants';

import styles from './Toasts.scss';

let id = 0;

export function Toasts({
  position = Toasts.Position.TopLeft,
  theme = Theme.Primary,
}: Toasts.Props): JSX.Element {
  const [identifier] = useState<number>(() => id++);
  const [notifications, setNotifications] = useState<InternalNotification[]>([]);
  const [notificationIdentifier, setNotificationIdentifier] = useState<number>(0);

  useEffect(() => {
    Listen(identifier, (notification: Toasts.Notification) => {
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

  return (
    <div
      className={classNames(
        styles.toasts,
        styles[position],
        styles[theme],
      )}
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

type Listener = (toast: Toasts.Notification) => void;
function Listen(id: number, listener: Listener): void {
  listeners[id] = listener;
}

function Unlisten(id: number): void {
  delete listeners[id];
}

export namespace Toasts {
  export interface Props {
    position?: Position;
    theme?: Theme;
  }

  export enum Position {
    TopLeft = 'top-left',
    TopRight = 'top-right',
    BottomLeft = 'bottom-left',
    BottomRight = 'bottom-right',
  }

  export interface Notification {
    duration?: number;
    message: string;
  }

  export function AddNotification(notification: Notification): void {
    for (const id in listeners) {
      listeners[id](notification);
    }
  }
}

interface InternalNotification {
  id: number;
  duration: number;
  message: string;
}
