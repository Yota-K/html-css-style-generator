// トップページ
// カードの型
export interface CardDataProps {
  heading: string;
  description: string;
  path: string;
}

// Button Generator
// Buttonのスタイルの型
export interface ButtonCardDataProps {
  heading: string;
  defaultStyles: {
    display?: string;
    textDecoration?: string;
    padding?: string;
    fontSize?: string;
    fontWeight?: string;
    background?: string;
    color?: string;
    border?: string;
    borderTop?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderRight?: string;
    borderRadius?: string;
    boxShadow?: string;
    transition?: string;
  };
  hoverStyles?: {
    background?: string;
    color?: string;
    transition?: string;
  };
  activeStyles?: {
    transform?: string;
    borderBottom?: string;
  };
  customStyles: {
    paddingX: string;
    paddingY: string;
    borderRadius: string;
  };
}

// 編集を行うスタイルの種類の型
export type EditType = 'paddingX' | 'paddingY' | 'borderRadius';
