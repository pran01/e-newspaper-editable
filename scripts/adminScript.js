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
