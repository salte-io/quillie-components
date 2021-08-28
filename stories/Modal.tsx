import classNames from 'classnames';
import React, { ReactNode, useEffect, useState } from 'react';
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
  isSubmitDisabled?: boolean;
  isSubmitLoading?: boolean;
  onSubmit?: () => void | Promise<void>;
  onCancel?: () => void;
  opened: boolean;
  size?: ModalSize;
  theme?: Theme;
}

export function Modal({
  children,
  title,
  isSubmitDisabled = false,
  isSubmitLoading = false,
  onSubmit,
  onCancel = noop,
  opened = false,
  size = ModalSize.Small,
  theme = Theme.Secondary,
}: ModalProps): JSX.Element {
  const [internallyOpened, setInternallyOpened] = useState<boolean>(opened);

  useEffect(() => {
    setInternallyOpened(opened);
  }, [opened]);

  return (
    <div
      className={classNames(
        styles.modalContainer,
        styles[size],
        styles[theme],
        internallyOpened && styles.opened,
      )}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setInternallyOpened(false);
          onCancel();
        }
      }}
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
            disabled={isSubmitLoading}
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
              disabled={isSubmitDisabled}
              loading={isSubmitLoading}
              onClick={async () => {
                await onSubmit();

                setInternallyOpened(false);
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
