import React from 'react';
import styled from 'styled-components';
import { ButtonCard } from '../../../Molecules/ButtonGenerator/ButtonCard/index';
import { AppTypography } from '../../../Atoms/Typography/index';

interface Props {
  cardData: any;
}

export const ButtonCardList: React.FC<Props> = ({ cardData }) => {
  return (
    <>
      <AppTypography variant="h2" text="デザインを選ぶ" />
      <CardList>
        <div className="cards-wrapper">
          {cardData.map((el, i) => (
            <ButtonCard key={i} heading={el.heading} defaultStyles={el.defaultStyles} />
          ))}
        </div>
      </CardList>
    </>
  );
};

const CardList = styled.nav`
  width: 100%;
  overflow-x: auto;

  .cards-wrapper {
    display: flex;

    .MuiCard-root {
      margin: 0 10px;
      min-width: 280px;
    }
  }
`;
