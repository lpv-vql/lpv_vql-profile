const user = "lpv_vql";

/* === ユーザー情報 === */
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${user}/info?mode=all`)
  .then(r => r.json())
  .then(d => {

    /* ホーム用 */
    if (document.getElementById("home-followers")) {
        document.getElementById("home-followers").textContent = d.followers;
    }

    /* 統計ページ用 */
    if (document.getElementById("followers")) {
        document.getElementById("followers").textContent = d.followers;
        document.getElementById("following").textContent = d.following;
        document.getElementById("projects").textContent = d.projectsShared;
        document.getElementById("join").textContent =
          d.joinDate.split(",")[0];
    }
  });

/* === プロジェクト統計 === */
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${user}/projectStats`)
  .then(r => r.json())
  .then(d => {

    /* ホーム用 */
    if (document.getElementById("home-views")) {
        document.getElementById("home-views").textContent = d.totalViews;
        document.getElementById("home-loves").textContent = d.totalLoves;
        document.getElementById("home-faves").textContent = d.totalFaves;
    }

    /* 統計ページ用 */
    if (document.getElementById("avgViews")) {
        document.getElementById("avgViews").textContent =
          d.averageStats.averageViews;
        document.getElementById("lv").textContent =
          d.loveToViewRatio.toFixed(2);
    }
  });

