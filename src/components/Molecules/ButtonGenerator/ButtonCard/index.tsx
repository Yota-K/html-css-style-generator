import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { CardHeading } from '../../../Atoms/CardHeading/index';
import { GenerateButton } from '../../../Atoms/ButtonGenerator/Button/index';

interface Props {
  heading: string;
  defaultStyles: any;
}

export const ButtonCard: React.FC<Props> = ({ heading, defaultStyles }) => {
  return (
    <Card>
      <CardContent>
        <CardHeading heading={heading} />
        <GenerateButton defaultStyles={defaultStyles} />
      </CardContent>
    </Card>
  );
};
