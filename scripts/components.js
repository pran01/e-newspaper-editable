function createArticle(article) {
  return `
    <article>
                <header class="article-header">
                    ${article.header}
                </header>

                ${
                  article.hasOwnProperty("image")
                    ? `<img class="article-image" src=${article.image} alt=${article.header}>`
                    : ""
                }
                <section class="article-body">
                    ${article.body}
                </section>
            </article>
    `;
}

function pasteArticles(articleCollection) {
  let articleString = "";
  for (let article of articleCollection) {
    articleString += createArticle(article);
  }
  return articleString;
}

function createPage(pageInfo, currentPage) {
  return `
    <section class="page ${
      pageInfo.page === currentPage ? "current" : ""
    }" id="page-${pageInfo.page}">
    <header class="news-header">
            <section class="metadata-header">
                <span>Saturday, January 8, 2022 | JDNEWS.COM</span>
                <span>Page: ${pageInfo.page}</span>
            </section>
        </header>
        <section id="articles-group">
            ${pasteArticles(pageInfo.content)}
        </section>
        <nav-element disabled-right prev-page="index.html"></nav-element>
    `;
}
