import React from 'react';

import { cardData } from './CardData';
import { CreateView } from '../../Templates/CreateButtonView/index';

export const CreateButtonPage = () => {
  return (
    <CreateView
      title="Style Generator"
      pageTitle="Style Generator｜ボタンの作成"
      featureTitle="Button Genarator"
      cardData={cardData}
      htmlCode='<a class="button-style">ボタン</a>'
    />
  );
};
