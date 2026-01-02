const accountsBySite = {
  "Scratch": [
    { name: "lpv_vql", link: "https://scratch.mit.edu/users/lpv_vql/" },
    { name: "Ougonhi_Hakuginhi", link: "https://scratch.mit.edu/users/Ougonhi_Hakuginhi/" },
    { name: "sub_pv", link: "https://scratch.mit.edu/users/sub_pv/" }
  ],
  "Japanese-Scratch Wiki": [
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
  "Japanese-Scratch Wiki": "https://ja.scratch-wiki.info/favicon.ico",
  "YouTube": "https://favicon.im/youtube.com",
  "GitHub": "https://github.githubassets.com/favicons/favicon.svg"
};

const accountContainer = document.getElementById("account-list");

if (accountContainer) {
  Object.keys(accountsBySite).forEach(site => {
    const siteDiv = document.createElement("div");
    siteDiv.style.marginBottom = "15px";

    const siteHeader = document.createElement("div");
    siteHeader.style.display = "flex";
    siteHeader.style.alignItems = "center";
    siteHeader.style.gap = "5px";

    const favicon = document.createElement("img");
    favicon.src = siteFavicons[site];
    favicon.alt = site + " icon";
    favicon.style.width = "20px";
    favicon.style.height = "20px";

    const siteTitle = document.createElement("h3");
    siteTitle.textContent = site;
    siteTitle.style.margin = "0";

    siteHeader.appendChild(favicon);
    siteHeader.appendChild(siteTitle);
    siteDiv.appendChild(siteHeader);
    accountContainer.appendChild(siteDiv);

    const siteList = document.createElement("div");
    siteList.style.marginLeft = "28px";
    siteList.style.display = "block";
    accountsBySite[site].forEach(acc => {
      const a = document.createElement("a");
      a.href = acc.link;
      a.target = "_blank";
      a.textContent = acc.name;
      a.style.display = "block";
      a.style.marginBottom = "4px";
      a.style.color = "black";
      a.style.textDecoration = "none";
      a.style.fontWeight = "bold";

      a.onmouseover = () => a.style.textDecoration = "underline";
      a.onmouseout = () => a.style.textDecoration = "none";

      siteList.appendChild(a);
    });

    accountContainer.appendChild(siteList);
  });
}
