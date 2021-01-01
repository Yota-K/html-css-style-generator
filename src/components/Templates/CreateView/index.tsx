import Head from 'next/head';
import React from 'react';
import Container from '@material-ui/core/Container';

import { AppTypography } from '../../Atoms/Typography/index';
import { AppHeader } from '../../Organisms/Header/index';
import { ButtonCardList } from '../../Organisms/ButtonGenarator/ButtonCardList/index';
import { ButtonCardDataProps } from '../../../../type/index';

interface Props {
  title: string;
  featureTitle: string;
  cardData: ButtonCardDataProps[];
}

export const CreateView: React.FC<Props> = ({ title, featureTitle, cardData }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppHeader />
      <Container>
        <AppTypography variant="h2" text={featureTitle} />
        <ButtonCardList cardData={cardData} />
      </Container>
    </>
  );
};
