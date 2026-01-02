// おすすめ作品リスト
const recommendedProjects = [
  "1223537762",
  "1204816483",
  "1172866199",
  "1113641457",
  "1071074675",
  "1052198414"
];

// サムネイル取得
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
