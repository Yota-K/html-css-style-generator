import React from 'react';
import { CreateView } from '../../Templates/CreateView/index';
import { cardData } from './CardData';

export const CreateButtonPage = () => {
  return <CreateView title="Style Generator｜ボタンの作成" featureTitle="Button Genarator" cardData={cardData} />;
};
