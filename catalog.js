(function () {
  var root = document.getElementById("catalog");
  var builds = window.BUILDS || [];

  if (!builds.length) {
    root.innerHTML = '<p class="empty">No builds yet.</p>';
    return;
  }

  root.innerHTML = builds
    .map(function (build) {
      var href = "builds/" + encodeURIComponent(build.slug) + "/";
      return (
        '<a class="card" href="' + href + '">' +
          '<span class="cover">' +
            '<img src="' + escapeAttr(build.cover) + '" alt="Cover art for ' + escapeAttr(build.name) + '">' +
          "</span>" +
          '<span class="card-body">' +
            "<h2>" + escapeHtml(build.name) + "</h2>" +
            "<p>" + escapeHtml(build.description) + "</p>" +
            '<span class="play">Play</span>' +
            '<span class="path">' + escapeHtml(href) + "</span>" +
          "</span>" +
        "</a>"
      );
    })
    .join("");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[char];
    });
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }
})();
