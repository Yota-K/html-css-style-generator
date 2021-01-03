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

type ObjType = State['defaultStyles'] | State['hoverStyles'] | State['activeStyles'];

// 文字列の整形
const replaceStr = (obj: ObjType) => {
  // オブジェクトになっているので配列に変換
  const ary = Object.values(obj);

  // 整形後の文字列を生成するため新しい配列を生成
  let str = '';
  str += ary.map((e) => `  ${e}\n`);

  // カンマが邪魔なので削除する
  return str.replace(/,/g, '');
};
