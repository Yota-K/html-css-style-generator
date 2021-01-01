import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { CardHeading } from '../../../Atoms/CardHeading/index';
import { GenerateButton } from '../../../Atoms/ButtonGenerator/Button/index';

import { ButtonCardDataProps } from '../../../../../type/index';

interface Props {
  heading: ButtonCardDataProps['heading'];
  defaultStyles: ButtonCardDataProps['defaultStyles'];
  hoverStyles?: ButtonCardDataProps['hoverStyles'];
  activeStyles?: ButtonCardDataProps['activeStyles'];
}

export const ButtonCard: React.FC<Props> = ({ heading, defaultStyles, hoverStyles, activeStyles }) => {
  return (
    <Card>
      <CardContent>
        <CardHeading heading={heading} />
        <GenerateButton defaultStyles={defaultStyles} hoverStyles={hoverStyles} activeStyles={activeStyles} />
      </CardContent>
    </Card>
  );
};
