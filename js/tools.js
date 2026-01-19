function renderTools(targetId, mode = "page") {
  const tools = [
    {
      title: "sb3のJSON編集",
      url: "https://lpv-vql.github.io/sb3-JSON/",
      desc: "sb3ファイルのJSONを編集することができます。"
    },
    {
      title: "scratch-text-costume",
      url: "https://lpv-vql.github.io/scratch-text-costume/",
      desc: "Scratchのコスチュームに文字を自動で設定します。"
    },
    {
      title: "scratch-save",
      url: "https://lpv-vql.github.io/scratch-save/",
      desc: "Scratchの作品のセーブコードを簡単に保存できます。"
    },
    {
      title: "あまり短くならない短縮URL",
      url: "https://scratch.mit.edu/projects/1146420418/",
      desc: "Scratchの作品URLを少し短くします。"
    },
    {
      title: "Transparentch",
      url: "https://lpv-vql.github.io/Transparentch/",
      desc: "コスチュームの透明度を変更できます。"
    },
    {
      title: "Fontch",
      url: "https://lpv-vql.github.io/Fontch/",
      desc: "Scratchで他のフォントを使えるようにします。"
    }
  ];

  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = "";

  const isHome = mode === "home";
  const list = isHome ? tools.slice(0, 3) : tools;

  container.classList.toggle("home-tools", isHome);
  container.classList.toggle("tools-page", !isHome);

  list.forEach(tool => {
    const card = document.createElement("div");
    card.className = "card tool-card";

    card.innerHTML = `
      <h2 class="tool-title">
        <a href="${tool.url}" target="_blank">${tool.title}</a>
      </h2>
      ${isHome ? "" : `<p class="tool-desc">${tool.desc}</p>`}
    `;

    container.appendChild(card);
  });
}

