const user = "lpv_vql";

/* ===== ユーザー基本情報取得 ===== */
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${user}/info?mode=all`)
  .then(res => res.json())
  .then(data => {

    /* ===== ホームページ 用 ===== */
    const hf = document.getElementById("home-followers");
    const icon = document.getElementById("icon");
    const uname = document.getElementById("username");

    if (hf) hf.textContent = data.followers ?? "-";
    if (icon) icon.src = data.profilePicture ?? "";
    if (uname) {
      uname.textContent = data.username ?? user;
      uname.href = `https://scratch.mit.edu/users/${user}/`;
    }

    /* ===== 統計ページ 用 ===== */
    const f = document.getElementById("followers");
    const fg = document.getElementById("following");
    const prj = document.getElementById("projects");
    const join = document.getElementById("join");

    if (f) f.textContent = data.followers ?? "-";
    if (fg) fg.textContent = data.following ?? "-";
    if (prj) prj.textContent = data.projectsShared ?? "-";
    if (join) join.textContent = data.joinDate?.split(",")[0] ?? "-";

  })
  .catch(error => {
    console.error("ユーザー情報の取得に失敗:", error);
  });

/* ===== 作品統計取得 ===== */
fetch(`https://scratchinfo.quuq.dev/api/v1/users/${user}/projectStats`)
  .then(res => res.json())
  .then(data => {

    /* ===== ホームページ 用 ===== */
    const hv = document.getElementById("home-views");
    const hl = document.getElementById("home-loves");
    const hfaves = document.getElementById("home-faves");

    if (hv) hv.textContent = data.totalViews ?? "-";
    if (hl) hl.textContent = data.totalLoves ?? "-";
    if (hfaves) hfaves.textContent = data.totalFaves ?? "-";

    /* ===== 統計ページ 用 ===== */
    const tv = document.getElementById("totalViews");
    const tl = document.getElementById("totalLoves");
    const tf = document.getElementById("totalFavorites");

    const avgV = document.getElementById("avgViews");
    const avgL = document.getElementById("avgLoves");
    const avgF = document.getElementById("avgFaves");

    const lv = document.getElementById("lvRatio");
    const fv = document.getElementById("fvRatio");

    if (tv) tv.textContent = data.totalViews ?? "-";
    if (tl) tl.textContent = data.totalLoves ?? "-";
    if (tf) tf.textContent = data.totalFaves ?? "-";

    if (avgV) avgV.textContent = data.averageStats?.averageViews ?? "-";
    if (avgL) avgL.textContent = data.averageStats?.averageLoves ?? "-";
    if (avgF) avgF.textContent = data.averageStats?.averageFaves ?? "-";

    if (lv) lv.textContent = data.loveToViewRatio?.toFixed(2) ?? "-";
    if (fv) fv.textContent = data.faveToViewRatio?.toFixed(2) ?? "-";

  })
  .catch(error => {
    console.error("プロジェクト統計の取得に失敗:", error);
  });
