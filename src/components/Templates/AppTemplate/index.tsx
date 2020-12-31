import Head from 'next/head';
import React from 'react';
import { AppHeader } from '../../Organisms/Header/index';
import Container from '@material-ui/core/Container';
import { CardDataProps } from '../../../../type';
import { CardList } from '../../Organisms/CardList/index';

interface Props {
  title: string;
  cardData: CardDataProps[];
}

export const AppTemplate: React.FC<Props> = ({ title, cardData }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppHeader />
      <Container>
        <CardList cardData={cardData} />
      </Container>
    </>
  );
};
