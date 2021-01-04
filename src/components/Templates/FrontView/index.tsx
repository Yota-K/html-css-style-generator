import React from 'react';

import Container from '@material-ui/core/Container';
import Head from 'next/head';

import { AppHeader } from '../../Organisms/Header/index';
import { CardDataProps } from '../../../../type';
import { CardList } from '../../Organisms/CardList/index';

interface Props {
  title: string;
  description: string;
  cardData: CardDataProps[];
}

export const FrontView: React.FC<Props> = ({ title, description, cardData }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <AppHeader title={title} />
      <Container>
        <CardList cardData={cardData} />
      </Container>
    </>
  );
};
