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
      color: '#67c5ff',
      border: '2px solid #67c5ff',
      transition: '.4s',
    },
    hoverStyles: {
      background: '#67c5ff',
      color: '#fff',
    },
  },
  {
    heading: 'デザイン3',
    defaultStyles: {
      background: '#46b574',
      color: '#fff',
      borderBottom: '4px solid #2581c4',
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
      background: '#46b574',
      color: '#fff',
      borderBottom: '4px solid  #2581c4',
    },
    activeStyles: {
      transform: 'translateY(4px)',
      borderBottom: 'none',
    },
  },
  {
    heading: 'デザイン5',
    defaultStyles: {
      border: '4px double orange',
      borderRadius: '3px',
      transition: '.4s',
    },
  },
  {
    heading: 'デザイン6',
    defaultStyles: {
      fontWeight: 'bold',
      background: '#ffecb3',
      color: 'orange',
      borderLeft: '4px solid orange',
      borderRight: '4px solid orange',
      transition: '.4s',
    },
    hoverStyles: {
      background: 'orange',
      color: '#fff',
    },
  },
];
