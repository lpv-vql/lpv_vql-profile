const accountsBySite = {
  "Scratch": [
    { name: "lpv_vql", link: "https://scratch.mit.edu/users/lpv_vql/" },
    { name: "Ougonhi_Hakuginhi", link: "https://scratch.mit.edu/users/Ougonhi_Hakuginhi/" },
    { name: "sub_pv", link: "https://scratch.mit.edu/users/sub_pv/" }
  ],
  "Japanese Scratch-Wiki": [
    { name: "Lpv vql", link: "https://ja.scratch-wiki.info/wiki/利用者:Lpv_vql" }
  ],
  "YouTube": [
    { name: "lpv_vql", link: "https://www.youtube.com/@lpv_vql" }
  ],
  "GitHub": [
    { name: "lpv-vql", link: "https://github.com/lpv-vql" }
  ]
};

const siteFavicons = {
  "Scratch": "https://scratch.mit.edu/favicon.ico",
  "Japanese Scratch-Wiki": "https://ja.scratch-wiki.info/favicon.ico",
  "YouTube": "https://favicon.im/youtube.com",
  "GitHub": "https://github.githubassets.com/favicons/favicon.svg"
};

const accountContainer = document.getElementById("account-list");

if (accountContainer) {
  Object.keys(accountsBySite).forEach(site => {
    // カード本体
    const card = document.createElement("div");
    card.className = "account-card";

    // ヘッダー（ファビコン＋サイト名）
    const header = document.createElement("div");
    header.className = "account-card-header";

    const favicon = document.createElement("img");
    favicon.src = siteFavicons[site];
    favicon.alt = site + " icon";
    favicon.className = "account-card-favicon";

    const title = document.createElement("span");
    title.textContent = site;
    title.className = "account-card-title";

    header.appendChild(favicon);
    header.appendChild(title);
    card.appendChild(header);

    // アカウントリンク
    const list = document.createElement("div");
    list.className = "account-card-list";
    accountsBySite[site].forEach(acc => {
      const a = document.createElement("a");
      a.href = acc.link;
      a.target = "_blank";
      a.textContent = acc.name;
      a.className = "account-link";
      list.appendChild(a);
    });

    card.appendChild(list);
    accountContainer.appendChild(card);
  });
}
