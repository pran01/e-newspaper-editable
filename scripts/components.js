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
