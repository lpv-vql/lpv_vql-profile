document.addEventListener("DOMContentLoaded", () => {

  fetch("/header.html")
    .then(r => r.text())
    .then(html => {
      const header = document.getElementById("header");
      if (header) header.innerHTML = html;
    });

  fetch("/footer.html")
    .then(r => r.text())
    .then(html => {
      const footer = document.getElementById("footer");
      if (footer) footer.innerHTML = html;
    });

});
