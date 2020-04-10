import React from 'react';
import user from '../zondicons/zondicons/user.svg';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const UserIcon = () => {
  return (
    <img
      src={user}
      alt="user"
      css={css`
        width: 12px;
        opacity: 0.6;
      `}
    />
  );
};
