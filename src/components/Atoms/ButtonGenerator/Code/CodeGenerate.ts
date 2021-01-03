import { State } from '../../../../../reducers/ButtonGenerator/index';

// スタイルの生成
export const styleGenerate = (state: State) => {
  // MEMO: 現状使っていない分岐だけど、使う可能性はあるので一応残しとく
  if (state.defaultStyles && state.hoverStyles && state.activeStyles) {
    const style = replaceStr(state.defaultStyles);
    const hoverStyle = replaceStr(state.hoverStyles);
    const activeStyle = replaceStr(state.activeStyles);

    return `.button-style {
${style}}

.button-style:hover {
${hoverStyle}}

.button-style:active {
${activeStyle}}`;
  } else if (state.defaultStyles && state.hoverStyles) {
    const style = replaceStr(state.defaultStyles);
    const hoverStyle = replaceStr(state.hoverStyles);

    return `.button-style {
${style}}

.button-style:hover {
${hoverStyle}}`;
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
