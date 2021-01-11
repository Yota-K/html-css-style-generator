import React, { useContext, useMemo } from 'react';

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
          paddingX: customStyle.paddingX,
          paddingY: customStyle.paddingY,
          borderRadius: customStyle.borderRadius,
        },
      },
    });
  };

  // MEMO: useMemo
  // 値のメモ化（何度やっても結果が同じ場合の値などを保存する）を行い、
  // そこから値の再取得を行うことができるhook
  // 第2引数の配列の中の値が変更された時のみ処理を行う
  // 空配列を渡すと、1回のみ実行される
  return useMemo(() => {
    return (
      <Card onClick={changeStyle}>
        <CardContent>
          <CardHeading heading={heading} />
          <GenerateButton styleObj={styleObj} hoverStyle={hoverStyle} activeStyle={activeStyle} />
        </CardContent>
      </Card>
    );
  }, []);
};
