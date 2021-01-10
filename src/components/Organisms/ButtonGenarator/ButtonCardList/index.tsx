import React from 'react';

import styled from 'styled-components';

import { AppTypography } from '../../../Atoms/Typography/index';
import { ButtonCard } from '../../../Molecules/ButtonGenerator/ButtonCard/index';
import { ButtonCardDataProps } from '../../../../../type/index';

interface Props {
  cardData: ButtonCardDataProps[];
}

export const ButtonCardList: React.FC<Props> = ({ cardData }) => {
  return (
    <>
      <AppTypography variant="h3" text="デザインを選ぶ" />
      <CardList>
        <div className="cards-wrapper">
          {cardData.map((el, i) => (
            <ButtonCard
              key={i}
              heading={el.heading}
              defaultStyles={el.defaultStyles}
              hoverStyles={el.hoverStyles}
              activeStyles={el.activeStyles}
              customStyles={el.customStyles}
            />
          ))}
        </div>
      </CardList>
    </>
  );
};

const CardList = styled.nav`
  width: 100%;
  overflow-x: auto;
  padding: 12px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  .cards-wrapper {
    display: flex;

    .MuiCard-root {
      margin: 0 10px;
      min-width: 280px;
      cursor: pointer;
    }
  }
`;
