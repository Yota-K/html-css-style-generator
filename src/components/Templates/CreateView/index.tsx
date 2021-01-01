import Head from 'next/head';
import React from 'react';
import { AppTypography } from '../../Atoms/Typography/index';
import { AppHeader } from '../../Organisms/Header/index';
import Container from '@material-ui/core/Container';

interface Props {
  title: string;
}

export const CreateView: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppHeader />
      <Container>
        <AppTypography variant="h2" text="Button Generator" />
      </Container>
    </>
  );
};
