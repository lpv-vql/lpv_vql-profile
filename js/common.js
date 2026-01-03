document.addEventListener("DOMContentLoaded", () => {

  fetch("/lpv_vql-profile/js/header.html")
    .then(r => r.text())
    .then(t => {
      const h = document.getElementById("header");
      if (h) h.innerHTML = t;
    });

  fetch("/lpv_vql-profile/js/footer.html")
    .then(r => r.text())
    .then(t => {
      const f = document.getElementById("footer");
      if (f) f.innerHTML = t;
    });

});
