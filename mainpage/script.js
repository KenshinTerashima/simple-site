document.addEventListener('DOMContentLoaded', function () {
  const loadingScreen = document.getElementById('loading-screen');
  const reloadButton = document.getElementById('reload-button');

  // ページ読み込みが完了したらダウンロード中の画面を非表示にする
  window.addEventListener('load', function () {
      loadingScreen.style.display = 'none';
  });

  // ページ再読み込みボタンがクリックされたらダウンロード中の画面を表示する
  reloadButton.addEventListener('click', function () {
      loadingScreen.style.display = 'block';

      // ページを再読み込みする
      window.location.reload();

      // なんかわからんけどブランチ分けるの忘れてこの分だけ書いてます
  });
});

window.addEventListener("beforeunload", function (event) {
  event.preventDefault(); // ページを離れる前のデフォルトのアクションを無効化
  event.returnValue = ""; // メッセージを表示するためのダミーのテキストを設定
  // メッセージを表示
  alert("ページをリロードしてもよろしいですか？");

  const reloadButton = document.getElementById('reload-button');

        // ページ再読み込みボタンがクリックされたときの処理
        reloadButton.addEventListener('click', function() {
            // firstpage.html にリダイレクト
            window.location.href = 'file:///Users/terashimakenshin/share-site-vtn/firstpage.html';
        });

      });

      // ページの読み込みが完了したら
    window.addEventListener('DOMContentLoaded', (event) => {
      // ヘッダー要素を取得
      const header = document.querySelector('header');

      // スクロールイベントを監視
      window.addEventListener('scroll', () => {
          if (window.scrollY > 0) {
              // スクロール位置が0より大きい場合、ヘッダーを固定
              header.classList.add('fixed-header');
          } else {
              // スクロール位置が0の場合、ヘッダーの固定を解除
              header.classList.remove('fixed-header');
          }
      });
  });