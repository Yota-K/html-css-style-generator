import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { CardHeading } from '../../../Atoms/CardHeading/index';
import { GenerateButton } from '../../../Atoms/ButtonGenerator/Button/index';

import { ButtonCardDataProps } from '../../../../../type/index';

interface Props {
  heading: ButtonCardDataProps['heading'];
  defaultStyles: ButtonCardDataProps['defaultStyles'];
  activeStyles?: ButtonCardDataProps['activeStyles'];
}

export const ButtonCard: React.FC<Props> = ({ heading, defaultStyles, activeStyles }) => {
  return (
    <Card>
      <CardContent>
        <CardHeading heading={heading} />
        <GenerateButton defaultStyles={defaultStyles} activeStyles={activeStyles} />
      </CardContent>
    </Card>
  );
};
