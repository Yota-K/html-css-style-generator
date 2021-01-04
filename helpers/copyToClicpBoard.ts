// クリップボードにコピーを行う関数
// 参考サイト: https://maku.blog/p/buk5i2o/

export const copyToClipboard = (text: string) => {
  // テキストコピー用の一時要素を作成
  const pre = document.createElement('pre');

  // テキストを選択可能にしてテキストセット
  pre.style.webkitUserSelect = 'auto';
  pre.style.userSelect = 'auto';
  pre.textContent = text;

  // 要素を追加、選択してクリップボードにコピー
  document.body.appendChild(pre);
  document.getSelection().selectAllChildren(pre);

  const result = document.execCommand('copy');

  // 要素を削除
  document.body.removeChild(pre);

  return result;
};
