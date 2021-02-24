window.onload = function () {
  var message = null;
  message = document.getElementById("contents");

  var error_msg = '東京ディズニー'; //エラーメッセージの頭7文字

  if (message != null) {
    // 扱いやすいようにスライス
    spr_real_msg = message.textContent.substr(1, 7); //1文字目は改行っぽい

    // エラー画面が表示されたらリロード
    if (error_msg == spr_real_msg) {
      spr_real_msg = null;

      //不正アクセスじゃない感を出すために0.5~0.7秒ぐらいリロードするのを待つ(もうちょい早くてもいける？)
      var wait = Math.random() * 200 + 500;
      window.setTimeout(reload, wait);
    } else {
      alert("何かしらのエラー")
    }
  } else {
    alert("入れました！");
  }
}

// リロードする
function reload() {
  window.location.href = 'https://reserve.tokyodisneyresort.jp/ticket/search/';
}