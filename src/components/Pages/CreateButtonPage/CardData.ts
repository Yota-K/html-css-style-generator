import { ButtonCardDataProps } from '../../../../type/index';

export const cardData: ButtonCardDataProps[] = [
  {
    heading: 'デザイン1',
    defaultStyles: {
      color: '#67c5ff',
      border: '2px solid #67c5ff',
      borderRadius: '3px',
      transition: '.4s',
    },
    hoverStyles: {
      background: '#67c5ff',
      color: '#fff',
    },
  },
  {
    heading: 'デザイン2',
    defaultStyles: {
      border: '1px solid red',
    },
  },
  {
    heading: 'デザイン3',
    defaultStyles: {
      background: 'green',
      color: '#fff',
      borderBottom: '4px solid #627295',
      borderRadius: '3px',
    },
    activeStyles: {
      transform: 'translateY(4px)',
      borderBottom: 'none',
    },
  },
  {
    heading: 'デザイン4',
    defaultStyles: {
      border: '1px solid blue',
    },
  },
  {
    heading: 'デザイン5',
    defaultStyles: {
      border: '1px solid purple',
    },
  },
];
