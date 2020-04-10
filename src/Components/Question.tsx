import React, { FC } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { QuestionData } from './QuestionData';
import { gray3, gray2 } from './Styles';

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

const Question: FC<Props> = ({ data, showContent = true }) => {
  return (
    <div
      css={css`
        padding: 10px 0px;
      `}
    >
      <div
        css={css`
          padding: 10px 0px;
          font-size: 19px;
        `}
      >
        {data.title}
      </div>
      <div
        css={css`
          padding-bottom: 10px;
          font-size: 15px;
          color: ${gray2};
        `}
      >
        {showContent && (
          <div>
            {data.content.length > 50
              ? `${data.content.substring(0, 50)}...`
              : data.content}
          </div>
        )}
      </div>
      <div
        css={css`
          font-size: 12px;
          font-style: italic;
          color: ${gray3};
        `}
      >
        {`Asked by ${
          data.userName
        } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
};

export default Question;
