const API =
  "https://scratchinfo.quuq.dev/api/v1/users/lpv_vql/projectStats";

let projects = [];

fetch(API)
  .then(r => r.json())
  .then(data => {
    projects = data.projects;
    update();
  });

document.getElementById("search").addEventListener("input", update);
document.getElementById("sort").addEventListener("change", update);

function update() {
  const q = document.getElementById("search").value.toLowerCase();
  const sort = document.getElementById("sort").value;

  let list = projects.filter(p =>
    p.title.toLowerCase().includes(q)
  );

  list.sort((a, b) => {
    if (sort === "time") return b.time - a.time;
    return b[sort] - a[sort];
  });

  render(list);
}

function render(list) {
  const container = document.getElementById("project-list");
  container.innerHTML = "";

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "project-card";

    div.innerHTML = `
      <a href="https://scratch.mit.edu/projects/${p.id}/" target="_blank">
        <img src="${p.img}" alt="">
      </a>
      <div class="project-title">${p.title}</div>
      <div class="project-stats">
        👁 ${p.views}  ❤ ${p.loves}  ⭐ ${p.faves}
      </div>
    `;

    container.appendChild(div);
  });
}
