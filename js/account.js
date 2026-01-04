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

const siteColors = {
  "Scratch": "#4D97FF",
  "Japanese Scratch-Wiki": "#4D97FF",
  "YouTube": "#FF0000",
  "GitHub": "#333"
};

const accountContainer = document.getElementById("account-list");

if (accountContainer) {
  Object.keys(accountsBySite).forEach(site => {
    const card = document.createElement("div");
    card.className = "account-card";

    const header = document.createElement("div");
    header.className = "account-card-header";

    const colorDot = document.createElement("span");
    colorDot.className = "account-card-dot";
    colorDot.style.backgroundColor = siteColors[site] || "#ccc"; // 色がない場合はグレー

    const title = document.createElement("span");
    title.textContent = site;
    title.className = "account-card-title";

    header.appendChild(colorDot);
    header.appendChild(title);
    card.appendChild(header);

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
