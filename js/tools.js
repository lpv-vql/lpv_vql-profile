const tools = [
  {
    title: "scratch-text-costume",
    url: "https://lpv-vql.github.io/scratch-text-costume/",
    desc: "Scratchのコスチュームに文字を自動で設定"
  },
  {
    title: "scratch-save",
    url: "https://lpv-vql.github.io/scratch-save/",
    desc: "Scratchの作品のセーブコードを保存"
  },
  {
    title: "あまり短くならない短縮URL",
    url: "https://scratch.mit.edu/projects/1146420418/",
    desc: "Scratchの作品URLを少し短縮"
  },
  {
    title: "Transparentch",
    url: "https://lpv-vql.github.io/Transparentch/",
    desc: "コスチュームの透明度を変更"
  },
  {
    title: "Fontch",
    url: "https://lpv-vql.github.io/Fontch/",
    desc: "Scratchで外部フォントを使用"
  }
];

function renderHomeTools(limit = 3) {
  const container = document.getElementById("home-tool-list");
  if (!container) return;

  tools.slice(0, limit).forEach(tool => {
    const card = document.createElement("div");
    card.className = "card tool-card";

    card.innerHTML = `
      <h3 class="tool-title">
        <a href="${tool.url}" target="_blank">${tool.title}</a>
      </h3>
    `;

    container.appendChild(card);
  });
}

renderHomeTools(3);

