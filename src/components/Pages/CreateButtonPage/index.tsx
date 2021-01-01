import React from 'react';

import { cardData } from './CardData';
import { CreateView } from '../../Templates/CreateView/index';

export const CreateButtonPage = () => {
  return <CreateView title="Style Generator｜ボタンの作成" featureTitle="Button Genarator" cardData={cardData} />;
};
