window.onload = function () {
  const minPage = 0;
  const maxPage = document.getElementsByClassName("page").length - 1;

  let currentPage = 0;

  if (location.hash.match(/#/)) {
    try {
      currentPage = parseInt(location.hash.replace("#", ""));
    } catch (e) {
      console.error(e);
    }
  }

  let windowHeight = window.innerHeight;

  const goToPage = (n) => {
    window.scroll({ top: n * windowHeight, behavior: "smooth" });
    location.hash = "#" + n;
    currentPage = n;
  };

  document.body.addEventListener("keydown", function (e) {
    e.stopPropagation();

    if (e.key === "Home") {
      goToPage(minPage);
    } else if (e.key === "End") {
      goToPage(maxPage);
    } else if (e.key === "j") {
      goToPage(Math.min(maxPage, currentPage + 1));
    } else if (e.key === "k") {
      goToPage(Math.max(minPage, currentPage - 1));
    }
  });

  document.getElementById("next").addEventListener("click", function (e) {
    e.preventDefault();
    goToPage(Math.min(maxPage, currentPage + 1));
  });

};
