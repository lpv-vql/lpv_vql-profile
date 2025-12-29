const username = "lpv_vql";

// ===== ユーザー基本情報 =====
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${username}/info?mode=all`)
  .then(r => r.json())
  .then(data => {
    document.getElementById("following").textContent = data.following;
    document.getElementById("followers").textContent = data.followers;
    document.getElementById("projects").textContent = data.projectsShared;
  })
  .catch(() => {
    document.getElementById("following").textContent = "エラー";
    document.getElementById("followers").textContent = "エラー";
    document.getElementById("projects").textContent = "エラー";
  });

// ===== プロジェクト合計統計 =====
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${username}/projectStats`)
  .then(r => r.json())
  .then(data => {
    document.getElementById("views").textContent = data.totalViews;
    document.getElementById("loves").textContent = data.totalLoves;
    document.getElementById("faves").textContent = data.totalFaves;
  })
  .catch(() => {
    document.getElementById("views").textContent = "エラー";
    document.getElementById("loves").textContent = "エラー";
    document.getElementById("faves").textContent = "エラー";
  });

