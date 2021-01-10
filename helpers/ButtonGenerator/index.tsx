import { State } from '../../reducers/ButtonGenerator/index';

// スタイルの生成
export const styleGenerate = (state: State) => {
  if (state.defaultStyles && state.hoverStyles) {
    const defaultStyles = replaceStr(state.defaultStyles);
    const hoverStyles = replaceStr(state.hoverStyles);

    return `.button-style {
${defaultStyles}}

.button-style:hover {
${hoverStyles}}`;
  } else if (state.defaultStyles && state.activeStyles) {
    const style = replaceStr(state.defaultStyles);
    const activeStyles = replaceStr(state.activeStyles);

    return `.button-style {
${style}}

.button-style:active {
${activeStyles}}`;
  } else {
    const style = replaceStr(state.defaultStyles);

    return `.button-style {
${style}}`;
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
