import { State } from '../../reducers/ButtonGenerator/index';

// スタイルの生成
export const styleGenerate = (state: State) => {
  if (state.styleObj && state.hoverStyle) {
    const style = replaceStr(state.styleObj);
    const hoverStyle = replaceStr(state.hoverStyle);

    return `.button-style {
${style}}

.button-style:hover {
${hoverStyle}}`;
  } else if (state.styleObj && state.activeStyle) {
    const style = replaceStr(state.styleObj);
    const activeStyle = replaceStr(state.activeStyle);

    return `.button-style {
${style}}

.button-style:active {
${activeStyle}}`;
  } else {
    const style = replaceStr(state.styleObj);

    return `.button-style {
${style}}`;
  }
};

type ObjType = State['styleObj'] | State['hoverStyle'] | State['activeStyle'];

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
