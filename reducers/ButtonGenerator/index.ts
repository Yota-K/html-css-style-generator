import { ButtonCardDataProps } from '../../type/index';

// 型TからKのプロパティを含む新しい型を生成する
// type Pick<T, K extends keyof T>
export type State = Pick<ButtonCardDataProps, 'styleObj' | 'hoverStyle' | 'activeStyle' | 'customStyle'>;

export const initialState: State = {
  styleObj: {
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
  hoverStyle: {
    background: 'background: #67c5ff;',
    color: 'color: #fff;',
  },
  customStyle: {
    paddingX: '4',
    paddingY: '12',
    borderRadius: '3',
  },
};

export type Action = {
  type: 'GENERATE_STYLE';
  payload: {
    styleObj: State['styleObj'];
    hoverStyle?: State['hoverStyle'];
    activeStyle?: State['activeStyle'];
    customStyle: State['customStyle'];
  };
};

export const reducer = (state: State, action: Action) => {
  if (action.type) {
    return {
      ...state,
      styleObj: action.payload.styleObj,
      hoverStyle: action.payload.hoverStyle,
      activeStyle: action.payload.activeStyle,
      customStyle: action.payload.customStyle,
    };
  } else {
    return state;
  }
};
