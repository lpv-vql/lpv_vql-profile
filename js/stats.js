const user = "lpv_vql";

/* ===== ユーザー情報 ===== */
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${user}/info?mode=all`)
  .then(r => r.json())
  .then(d => {

    // アイコン
    const icon = document.getElementById("icon");
    if (icon) icon.src = d.profilePicture;

    // ユーザー名リンク
    const name = document.getElementById("username");
    if (name) name.href = `https://scratch.mit.edu/users/${user}/`;

    // ホーム：フォロワー
    const hf = document.getElementById("home-followers");
    if (hf) hf.textContent = d.followers;
  });

/* ===== プロジェクト統計 ===== */
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${user}/projectStats`)
  .then(r => r.json())
  .then(d => {

    const v = document.getElementById("home-views");
    const l = document.getElementById("home-loves");
    const f = document.getElementById("home-faves");

    if (v) v.textContent = d.totalViews;
    if (l) l.textContent = d.totalLoves;
    if (f) f.textContent = d.totalFaves;
  });
