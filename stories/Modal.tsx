import classNames from 'classnames';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Inherit, JustifyContent, Layout, Theme } from './constants';

import { Button } from './Button';
import { Grid } from './Grid';
import { Typography, TypographyStyles } from './Typography';

import styles from './Modal.scss';
import { noop } from './utils/noop';
import { Icon, IconType } from './Icon';

export enum ModalSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ModalProps {
  children: ReactNode;
  title?: ReactNode;
  onSubmit?: () => void;
  onCancel?: () => void;
  opened: boolean;
  size?: ModalSize;
  theme?: Theme;
}

export function Modal({
  children,
  title,
  onSubmit,
  onCancel = noop,
  opened = false,
  size = ModalSize.Small,
  theme = Theme.Secondary,
}: ModalProps): JSX.Element {
  const elementRef = useRef<HTMLDivElement>();
  const listenerRef = useRef<(event: MouseEvent) => void>();
  const [internallyOpened, setInternallyOpened] = useState<boolean>(opened);

  useEffect(() => {
    setInternallyOpened(opened);
  }, [opened]);

  useEffect(() => {
    if (internallyOpened) {
      listenerRef.current = (event: MouseEvent): void => {
        const path = event.composedPath();
        if (!path.includes(elementRef.current)) {
          setInternallyOpened(false);
          onCancel();
        }
      };

      window.addEventListener('click', listenerRef.current, {
        passive: true,
      });
    } else if (listenerRef.current) {
      window.removeEventListener('click', listenerRef.current);
      listenerRef.current = null;
    }

    return () => {
      if (listenerRef.current) {
        window.removeEventListener('click', listenerRef.current);
      }
    }
  }, [internallyOpened]);

  return (
    <div
      ref={elementRef}
      className={classNames(
        styles.modalContainer,
        styles[size],
        styles[theme],
        internallyOpened && styles.opened,
      )}
    >
      <Grid className={styles.modal} layout={Layout.Vertical}>
        <Button
          className={styles.cancel}
          theme={Theme.Secondary}
          onClick={() => {
            setInternallyOpened(false);
            onCancel();
          }}
        >
          <Icon icon={IconType.Clear} />
        </Button>
        {title && (
          <Typography
            className={styles.title}
            style={TypographyStyles.H2}
            theme={Inherit}
          >
            {title}
          </Typography>
        )}
        <Grid
          className={styles.content}
          layout={Layout.Vertical}
        >
          {children}
        </Grid>
        <Grid
          justifyContent={JustifyContent.End}
          layout={Layout.Horizontal}
        >
          <Button
            theme={Theme.Secondary}
            onClick={() => {
              setInternallyOpened(false);
              onCancel();
            }}
          >
            Cancel
          </Button>
          {onSubmit && (
            <Button
              onClick={() => {
                setInternallyOpened(false);
                onSubmit();
              }}
            >
              Submit
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
