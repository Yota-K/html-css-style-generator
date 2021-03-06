import React, { createContext, useReducer } from 'react';

import Container from '@material-ui/core/Container';
import Head from 'next/head';

import { AppHeader } from '../../Organisms/Header/index';
import { AppTypography } from '../../Atoms/Typography/index';
import { ButtonCardList } from '../../Organisms/ButtonGenarator/ButtonCardList/index';
import { ButtonCodeView } from '../../Organisms/ButtonGenarator/Codeview/index';
import { ButtonEditView } from '../../Organisms/ButtonGenarator/EditView/index';
import { ButtonPreview } from '../../Organisms/ButtonGenarator/Preview/index';
import { ButtonCardDataProps } from '../../../../type/index';
import { State, initialState, Action, reducer } from '../../../../reducers/ButtonGenerator/index';

interface Props {
  title: string;
  description: string;
  pageTitle: string;
  featureTitle: string;
  cardData: ButtonCardDataProps[];
  htmlCode: string;
}

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext({} as ContextType);

export const CreateView: React.FC<Props> = ({ pageTitle, title, description, featureTitle, cardData, htmlCode }) => {
  const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
  };

  return (
    <AppProvider>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <AppHeader title={title} />
      <Container>
        <AppTypography variant="h2" text={featureTitle} />
        <ButtonCardList cardData={cardData} />
        <ButtonEditView />
        <ButtonPreview />
        <ButtonCodeView htmlCode={htmlCode} />
      </Container>
    </AppProvider>
  );
};
