// ホームのアカウント欄
const accounts = [
  // Scratchアカウント
  {
    name: "lpv_vql",
    link: "https://scratch.mit.edu/users/lpv_vql/",
    icon: "https://cdn2.scratch.mit.edu/get_image/user/139189676_60x60.png"
  },
  {
    name: "Ougonhi_Hakuginhi",
    link: "https://scratch.mit.edu/users/Ougonhi_Hakuginhi/",
    icon: "https://cdn2.scratch.mit.edu/get_image/user/your_icon_id_60x60.png"
  },
  {
    name: "sub_pv",
    link: "https://scratch.mit.edu/users/sub_pv/",
    icon: "https://cdn2.scratch.mit.edu/get_image/user/your_icon_id_60x60.png"
  },

  // Japanese-Scratch Wiki
  {
    name: "Lpv vql",
    link: "https://ja.scratch-wiki.info/wiki/利用者:Lpv_vql",
    icon: "https://cdn2.scratch.mit.edu/get_image/user/139189676_60x60.png"
  },

  // YouTube
  {
    name: "lpv_vql",
    link: "https://www.youtube.com/@lpv_vql",
    icon: "https://www.youtube.com/s/desktop/f4f4cfe4/img/favicon_32.png"
  },

  // GitHub
  {
    name: "lpv-vql",
    link: "https://github.com/lpv-vql",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  }
];

const accountContainer = document.getElementById("account-list");

if (accountContainer) {
  accounts.forEach(acc => {
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
    accountContainer.appendChild(div);
  });
}
