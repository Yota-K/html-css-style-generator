import React, { useContext } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { AppContext } from '../../../Templates/CreateButtonView/index';
import { ButtonCardDataProps } from '../../../../../type/index';
import { CardHeading } from '../../../Atoms/CardHeading/index';
import { GenerateButton } from '../../../Atoms/ButtonGenerator/Button/index';

interface Props {
  heading: ButtonCardDataProps['heading'];
  styleObj: ButtonCardDataProps['styleObj'];
  hoverStyle?: ButtonCardDataProps['hoverStyle'];
  activeStyle?: ButtonCardDataProps['activeStyle'];
  customStyle: ButtonCardDataProps['customStyle'];
}

export const ButtonCard: React.FC<Props> = ({ heading, styleObj, hoverStyle, activeStyle, customStyle }) => {
  const { dispatch } = useContext(AppContext);

  const changeStyle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    dispatch({
      type: 'GENERATE_STYLE',
      payload: {
        styleObj: styleObj,
        hoverStyle: hoverStyle,
        activeStyle: activeStyle,
        // ボタンを選択した後に追加したスタイルを初期化する
        customStyle: {
          paddingX: '4',
          paddingY: '12',
          borderRadius: customStyle.borderRadius,
        },
      },
    });
  };

  return (
    <Card onClick={changeStyle}>
      <CardContent>
        <CardHeading heading={heading} />
        <GenerateButton styleObj={styleObj} hoverStyle={hoverStyle} activeStyle={activeStyle} />
      </CardContent>
    </Card>
  );
};
