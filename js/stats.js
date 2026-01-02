const user = "lpv_vql";

// --- ユーザー基本情報取得 ---
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${user}/info?mode=all`)
  .then(res => res.json())
  .then(data => {

    /* ===== ホームページ 用 ===== */
    if (document.getElementById("home-followers")) {
        // ホーム用フォロワー表示
        document.getElementById("home-followers").textContent = data.followers;
    }

    /* ===== 統計ページ 用 ===== */
    if (document.getElementById("followers")) {

        // 統計ページの基本統計
        document.getElementById("followers").textContent = data.followers;
        document.getElementById("following").textContent = data.following;
        document.getElementById("projects").textContent = data.projectsShared;

        // 参加日（後ろの時刻は切って表示）
        document.getElementById("join").textContent =
            data.joinDate.split(",")[0];
    }
  })
  .catch(error => {
    console.error("ユーザー情報の取得に失敗:", error);
  });

// --- 作品統計取得 ---
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${user}/projectStats`)
  .then(res => res.json())
  .then(data => {

    /* ===== ホームページ 用 ===== */
    if (document.getElementById("home-views")) {
        document.getElementById("home-views").textContent = data.totalViews;
        document.getElementById("home-loves").textContent = data.totalLoves;
        document.getElementById("home-faves").textContent = data.totalFaves;
    }

    /* ===== 統計ページ 用 ===== */
    if (document.getElementById("totalViews")) {
        // 合計値
        document.getElementById("totalViews").textContent = data.totalViews;
        document.getElementById("totalLoves").textContent = data.totalLoves;
        document.getElementById("totalFavorites").textContent = data.totalFaves;

        // 平均値
        document.getElementById("avgViews").textContent =
            data.averageStats.averageViews;
        document.getElementById("avgLoves").textContent =
            data.averageStats.averageLoves ?? "-";
        document.getElementById("avgFaves").textContent =
            data.averageStats.averageFaves ?? "-";

        // 比率
        document.getElementById("lvRatio").textContent =
            data.loveToViewRatio.toFixed(2);
        document.getElementById("fvRatio").textContent =
            data.faveToViewRatio.toFixed(2);
    }
  })
  .catch(error => {
    console.error("プロジェクト統計の取得に失敗:", error);
  });

