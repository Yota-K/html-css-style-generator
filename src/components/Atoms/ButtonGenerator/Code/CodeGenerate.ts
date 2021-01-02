import { State } from '../../../../../reducers/ButtonGenerator/index';

// スタイルの生成
export const styleGenerate = (selector: string, state: State) => {
  if (selector === 'button-style') {
    const styles = replaceStr(state.defaultStyles);

    return `.button-style {
${styles}}\n`;
  } else if (selector === 'button-style:hover') {
    const styles = replaceStr(state.hoverStyles);

    return `\n.button-style:hover {
${styles}}\n`;
  } else {
    const styles = replaceStr(state.activeStyles);

    return `\n.button-style:active {
${styles}}\n`;
  }
};

// 文字列の整形
const replaceStr = (state: any) => {
  const ary = Object.values(state);

  let str = '';
  str += ary.map((e) => {
    return `  ${e}\n`;
  });

  return str.replace(/,/g, '');
};
