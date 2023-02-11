if (document.getElementById("summernote"))
  $("#summernote").summernote({
    toolbar: [["font", ["bold", "underline", "italic"]]],
    placeholder: "Add Your News Content",
    height: 200,
  });
function addNews() {
  let summernote = document.getElementById("summernote");
  let articleHeader = document.querySelector("#article-header-form");
  let articleImageLink = document.querySelector("#article-image-link");
  let body = summernote.value;
  let header = articleHeader.value;
  let image = articleImageLink.value;

  summernote.value = "";
  articleHeader.value = "";
  articleImageLink.value = "";

  let article = { header: header, body: body };
  if (image !== "") article = { ...article, image: image };
  addArticle(article);
  render();

  document.querySelector(".done-status").style.display = "flex";
}

function addArticle(pageNo, article) {
  let tempPages = [];
  if (localStorage.getItem("pages"))
    tempPages = JSON.parse(localStorage.getItem("pages"));
  for (let page of tempPages) {
    if (page.page == pageNo) {
      page.content.push(article);
      break;
    }
  }
  localStorage.setItem("pages", JSON.stringify(tempPages));
}

function render() {
  let tempPages = [];
  let currentPage = 2;
  if (localStorage.getItem("pages"))
    tempPages = JSON.parse(localStorage.getItem("pages"));
  else {
    tempPages = pages;
    localStorage.setItem("pages", JSON.stringify(tempPages));
  }
  if (localStorage.getItem("current-page"))
    currentPage = JSON.parse(localStorage.getItem("current-page"));
  else {
    localStorage.setItem("current-page", JSON.stringify(currentPage));
  }
  if (document.querySelector("#newspaper-body")) {
    document.querySelector("#newspaper-body").innerHTML = "";
    tempPages.map((page) => {
      document.querySelector("#newspaper-body").innerHTML += createPage(
        page,
        currentPage
      );
    });
  }
}

function closePopup() {
  document.querySelector(".done-status").style.display = "none";
}
