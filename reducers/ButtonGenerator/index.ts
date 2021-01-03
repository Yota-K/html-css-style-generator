import { ButtonCardDataProps } from '../../type/index';

// 型TからKのプロパティを含む新しい型を生成する
// type Pick<T, K extends keyof T>
export type State = Pick<ButtonCardDataProps, 'defaultStyles' | 'hoverStyles' | 'activeStyles'>;

export const initialState: State = {
  defaultStyles: {
    display: 'display: inline-block;',
    textDecoration: 'text-decoration: none;',
    padding: 'padding: 4px 12px;',
    fontSize: 'font-size: 16px;',
    background: 'background: #fff;',
    color: 'color: #67c5ff;',
    border: 'border: 2px solid #67c5ff;',
    borderRadius: 'border-radius: 3px;',
    transition: 'transition: .4s;',
  },
  hoverStyles: {
    background: 'background: #67c5ff;',
    color: 'color: #fff;',
  },
};

export type Action = {
  type: 'GENERATE_STYLE';
  payload: {
    defaultStyles: State['defaultStyles'];
    hoverStyles?: State['hoverStyles'];
    activeStyles?: State['activeStyles'];
  };
};

export const reducer = (state: State, action: Action) => {
  if (action.type) {
    return {
      ...state,
      defaultStyles: action.payload.defaultStyles,
      hoverStyles: action.payload.hoverStyles,
      activeStyles: action.payload.activeStyles,
    };
  } else {
    return state;
  }
};
