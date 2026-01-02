const accountsBySite = {
  "Scratch": [
    { name: "lpv_vql", link: "https://scratch.mit.edu/users/lpv_vql/", icon: "https://cdn2.scratch.mit.edu/get_image/user/139189676_60x60.png" },
    { name: "Ougonhi_Hakuginhi", link: "https://scratch.mit.edu/users/Ougonhi_Hakuginhi/", icon: "https://cdn2.scratch.mit.edu/get_image/user/141962855_60x60.png" },
    { name: "sub_pv", link: "https://scratch.mit.edu/users/sub_pv/", icon: "https://cdn2.scratch.mit.edu/get_image/user/142051866_60x60.png" }
  ],
  "Japanese Scratch-Wiki": [
    { name: "Lpv vql", link: "https://ja.scratch-wiki.info/wiki/利用者:Lpv_vql", icon: "https://cdn2.scratch.mit.edu/get_image/user/139189676_60x60.png" }
  ],
  "YouTube": [
    { name: "lpv_vql", link: "https://www.youtube.com/@lpv_vql", icon: "https://www.youtube.com/s/desktop/f4f4cfe4/img/favicon_32.png" }
  ],
  "GitHub": [
    { name: "lpv-vql", link: "https://github.com/lpv-vql", icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" }
  ]
};

const accountContainer = document.getElementById("account-list");

if (accountContainer) {
  // サイトごとに分けて表示
  Object.keys(accountsBySite).forEach(site => {
    // サイト名見出し
    const siteTitle = document.createElement("h3");
    siteTitle.textContent = site;
    siteTitle.style.margin = "10px 0 5px 0";
    accountContainer.appendChild(siteTitle);

    // サイトのアカウントリスト
    const siteList = document.createElement("div");
    siteList.className = "account-list";
    accountsBySite[site].forEach(acc => {
      const div = document.createElement("div");
      div.className = "account-item";

      const img = document.createElement("img");
      img.src = acc.icon;
      img.alt = acc.name;

      const a = document.createElement("a");
      a.href = acc.link;
      a.target = "_blank";
      a.textContent = acc.name;

      div.appendChild(img);
      div.appendChild(a);
      siteList.appendChild(div);
    });

    accountContainer.appendChild(siteList);
  });
}

