import React from 'react';
import { AppTemplate } from '../../Templates/AppTemplate/index';
import { CardDataProps } from '../../../../type';

const cardData: CardDataProps[] = [
  {
    heading: 'ボタンの作成',
    description: 'HTML・CSSを書かずにボタンの作成ができます。',
    path: 'create-button'
  },
  {
    heading: '見出しの作成',
    description: 'HTML・CSSを書かずに見出しの作成ができます。',
    path: 'create-heading'
  },
  {
    heading: 'オリジナルのスタイルの作成',
    description: 'HTML・CSSをを使用して、オリジナルのスタイルの作成ができます。',
    path: 'create-original-style'
  }
];

export const FrontPage = () => {
  return <AppTemplate 
    title="アプリケーション"
    cardData={cardData}
  />;
}
