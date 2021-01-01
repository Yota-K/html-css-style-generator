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
    color?: string;
    border?: string;
    borderLeft?: string;
    borderRight?: string;
    borderRadius?: string;
    boxShadow?: string;
    transition?: string;
  };
  activeStyles?: {
    background?: string;
    color?: string;
    transition?: string;
  };
}
