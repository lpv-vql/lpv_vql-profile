// おすすめ作品リスト（作品IDまたはURL）
const recommendedProjects = [
  "749818769", // 例: Scratch作品ID
  "749818770",
  "749818771"
];

// サムネイル取得関数
function createProjectThumbnail(projectId) {
  const url = `https://cdn2.scratch.mit.edu/get_image/project/${projectId}_480x360.png`;
  const link = `https://scratch.mit.edu/projects/${projectId}/`;

  const a = document.createElement("a");
  a.href = link;
  a.target = "_blank";
  a.className = "project-thumb";

  const img = document.createElement("img");
  img.src = url;
  img.alt = "project " + projectId;
  img.className = "thumb-image";

  a.appendChild(img);
  return a;
}

// 挿入
const container = document.getElementById("recommended-list");
if (container) {
  recommendedProjects.forEach(id => {
    const thumb = createProjectThumbnail(id);
    container.appendChild(thumb);
  });
}
