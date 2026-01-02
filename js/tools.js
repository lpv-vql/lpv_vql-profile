const TOOLS = [
  {
    title: "scratch-text-costume",
    url: "https://lpv-vql.github.io/scratch-text-costume/",
    desc: "Scratchのコスチュームに文字を自動で設定します。テキストエンジンを作るのに最適です。"
  },
  {
    title: "scratch-save",
    url: "https://lpv-vql.github.io/scratch-save/",
    desc: "Scratchの作品のセーブコードを簡単に保存することができます。"
  },
  {
    title: "あまり短くならない短縮URL",
    url: "https://scratch.mit.edu/projects/1146420418/",
    desc: "Scratchの作品URLが少し短くできます。"
  },
  {
    title: "Transparentch",
    url: "https://lpv-vql.github.io/Transparentch/",
    desc: "Scratchのコスチュームの透明度を変えることができます。"
  },
  {
    title: "Fontch",
    url: "https://lpv-vql.github.io/Fontch/",
    desc: "Scratchのコスチュームエディター内にあるフォント以外のフォントも使えるようになります。"
  }
];


function renderTools(containerId, limit = null) {
  const container = document.getElementById(containerId);
  const list = limit ? TOOLS.slice(0, limit) : TOOLS;

  list.forEach(tool => {
    const card = document.createElement("div");
    card.className = "card tool-card";

    card.innerHTML = `
      <h2 class="tool-title">
        <a href="${tool.url}">${tool.title}</a>
      </h2>
      <p class="tool-desc">${tool.desc}</p>
    `;

    container.appendChild(card);
  });
}
