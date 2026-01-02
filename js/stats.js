const user = "lpv_vql";

/* === 共通 === */
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${user}/info?mode=all`)
  .then(r => r.json())
  .then(d => {

    // ホーム用（存在すれば実行）
    if (document.getElementById("icon")) {
        document.getElementById("icon").src = d.profilePicture;
        document.getElementById("username").href =
          `https://scratch.mit.edu/users/${user}/`;
        document.getElementById("followers").textContent = d.followers;
    }

    // 統計ページ用
    if (document.getElementById("following")) {
        document.getElementById("following").textContent = d.following;
        document.getElementById("projects").textContent = d.projectsShared;
        document.getElementById("join").textContent = d.joinDate;
    }
  });

fetch(`https://scratchinfo.quuq.dev/api/v1/users/${user}/projectStats`)
  .then(r => r.json())
  .then(d => {

    // ホーム用
    if (document.getElementById("views")) {
        document.getElementById("views").textContent = d.totalViews;
        document.getElementById("loves").textContent = d.totalLoves;
        document.getElementById("faves").textContent = d.totalFaves;
    }

    // 統計ページ用
    if (document.getElementById("avgViews")) {
        document.getElementById("avgViews").textContent = d.averageStats.averageViews;
        document.getElementById("lv").textContent =
          d.loveToViewRatio.toFixed(2);
    }
  });
