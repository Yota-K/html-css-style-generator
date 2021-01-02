import Head from 'next/head';
import React, { createContext, useReducer } from 'react';
import Container from '@material-ui/core/Container';

import { AppHeader } from '../../Organisms/Header/index';
import { AppTypography } from '../../Atoms/Typography/index';
import { ButtonCardList } from '../../Organisms/ButtonGenarator/ButtonCardList/index';
import { ButtonCodeView } from '../../Organisms/ButtonGenarator/Codeview/index';
import { ButtonCardDataProps } from '../../../../type/index';
import { State, initialState, Action, reducer } from '../../../../reducers/ButtonGenerator/index';

interface Props {
  title: string;
  featureTitle: string;
  cardData: ButtonCardDataProps[];
}

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext({} as ContextType);

export const CreateView: React.FC<Props> = ({ title, featureTitle, cardData }) => {
  const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
  };

  return (
    <AppProvider>
      <Head>
        <title>{title}</title>
      </Head>
      <AppHeader />
      <Container>
        <AppTypography variant="h2" text={featureTitle} />
        <ButtonCardList cardData={cardData} />
        <ButtonCodeView />
      </Container>
    </AppProvider>
  );
};
