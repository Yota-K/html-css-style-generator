import React, { useContext } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { AppContext } from '../../../Templates/CreateButtonView/index';
import { ButtonCardDataProps } from '../../../../../type/index';
import { CardHeading } from '../../../Atoms/CardHeading/index';
import { GenerateButton } from '../../../Atoms/ButtonGenerator/Button/index';

interface Props {
  heading: ButtonCardDataProps['heading'];
  defaultStyles: ButtonCardDataProps['defaultStyles'];
  hoverStyles?: ButtonCardDataProps['hoverStyles'];
  activeStyles?: ButtonCardDataProps['activeStyles'];
  customStyles: ButtonCardDataProps['customStyles'];
}

export const ButtonCard: React.FC<Props> = ({ heading, defaultStyles, hoverStyles, activeStyles, customStyles }) => {
  const { dispatch } = useContext(AppContext);

  const changeStyle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    dispatch({
      type: 'GENERATE_STYLE',
      payload: {
        defaultStyles: defaultStyles,
        hoverStyles: hoverStyles,
        activeStyles: activeStyles,
        // ボタンを選択した後に追加したスタイルを初期化する
        customStyles: {
          paddingX: '4',
          paddingY: '12',
          borderRadius: customStyles.borderRadius,
        },
      },
    });
  };

  return (
    <Card onClick={changeStyle}>
      <CardContent>
        <CardHeading heading={heading} />
        <GenerateButton defaultStyles={defaultStyles} hoverStyles={hoverStyles} activeStyles={activeStyles} />
      </CardContent>
    </Card>
  );
};
