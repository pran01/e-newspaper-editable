// let body, image, authorName, header;
// if (localStorage.getItem("body")) {
//   body = localStorage.getItem("body");
// } else {
//   body = `WASHINGTON - The Supreme
//   Court's conservative majority appeared
//   skeptical Friday of the Biden administration's authority to impose a vaccine-or-testing requirement on
//   the nation's large employers. The court also
//   was hearing arguments on a separate
//   vaccine mandate for most health care workers.
//   The arguments in the two cases come
//   at a time of spiking coronavirus cases
//   because of the omicron variant, and the
//   decision Friday by seven justices to
//   wear masks for the firsttime while hearing arguments reflected the new phase
//   of the pandemic.
//   Justice Sonia Sotomayor, who has
//   had diabetes since childhood, didn't appear in the courtroom, choosing to remain in her office at the
//   court and take
//   part remotely. Two lawyers, representing Ohio and Louisiana, argued by telephone after recent positive
//   COVID-19
//   tests, state officials said.
//   But the COVID-19 circumstances did
//   not appear to outweigh the views of the
//   courts six conservatives that the administration overstepped its authority
//   in its vaccine-or-testing requirement
//   for businesses with at least100 employees.
//   &quot;This is something the federal government has never done before,&quot; Chief
//   Justice John Roberts said, casting doubt
//   on the administration's argument that a
//   half-century established law, the Occupational Safety and Health Act, confers
//   such broad authority.
//   Roberts and Justices Brett Kavanaugh and Amy Coney Barrett probably
//   hold the key to the outcome in both
//   cases, as they have been more receptive
//   to state-level vaccine requirements
//   than the other three conservative justices. Barrett and Kavanaugh also had something to do with it.`;
// }
// if (localStorage.getItem("header")) {
//   header = localStorage.getItem("header");
// } else {
//   header = "Supreme Court leery of mandate";
// }
// if (localStorage.getItem("image")) {
//   image = localStorage.getItem("image");
// }
// if (localStorage.getItem("author")) {
//   authorName = localStorage.getItem("author");
// }

// const topArticle = document.createElement("top-article");
// topArticle.setAttribute("body", body);
// if (image) topArticle.setAttribute("image", image);
// topArticle.setAttribute("header", header);
// topArticle.setAttribute("author-name", authorName);
// topArticle.setAttribute("author-organisation", "Jacksonville Daily News");
// document.querySelector("body").appendChild(topArticle);
let newsArticles = [
  {
    header: "News Corp to cut over 1,000 jobs. Here's why",
    body: `News Corp said on Thursday that it would cut 5% of its workforce, or 1,250 jobs, after the media
  conglomerate fell short of quarterly Wall Street estimates for profit and revenue, hurt by declines
  across its businesses including news.

  The company also said it incurred $6 million in one-time costs associated with its plans to merge
  with Fox Corp, which News Corp Executive Chairman and Fox Co-Chairman Rupert Murdoch scrapped in
  January.

  A slump in advertising spending by businesses hit by rising inflation and higher interest rates has
  dented one of the major sources of revenue for companies such as News Corp, which publishes the Wall
  Street Journal (WSJ).

  "A surge in interest rates and acute inflation had a tangible impact on all of our businesses,"
  Chief Executive Robert Thomson said in a statement.

  Shares of the company were down nearly 3% in extended trading.`,
    image:
      "https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/news_corp_layoffs_1675993342454_1675993342663_1675993342663.jpg",
  },
  {
    header:
      "Man missing in Turkey was to return month-end; no news yet, says brother",
    body: `A 36-year-old plant engineer from Uttarakhand who is missing in Turkey in the aftermath of the
massive earthquake that struck the country and Syria on Monday went there on a month-long office
trip and is scheduled to return later this month, his family members based in Dehradun said on
Thursday.
Vijay Kumar, the missing person, works for Bengaluru-based Oxyplants India Private Limited and was
sent to Turkey by the company for execution and commissioning of a dissolved acetylene gas plant for
a gas supply company there, his elder brother, Arun Kumar, said.
“He reached Turkey on January 23 and we last spoke with him on Sunday,” Arun, who also works for
Oxyplants as a technical consultant, said.
“I am in touch with Indian embassy officials. I spoke with the Indian Embassy in Turkey on Thursday,
too — they told me there is no update on my brother. We still do not know where he is, and whether
he is safe,” Arun said.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur minus veniam ipsum
nostrum necessitatibus sed doloremque quae laboriosam vero.`,
  },
  {
    header: "What happened to your data on Aarogya Setu?",
    body: `
  On Wednesday (February 8), Congress MP Amar Singh sought details of the current legislation or
                    protocol governing the data collected by Aarogya Setu, and a list of the government or private
                    agencies, organisations, institutes and individuals with access to that data.

                    In response, Chandrasekhar said, &quot;The National Executive Committee constituted under the
                    Disaster
                    Management Act, 2005,… issued an order dated 29.3.2020 constituting, among others, an empowered
                    group on technology and data management to identify problem areas and provide effective solutions…
                    and take all necessary steps for effective and time-bound implementation of these plans… in relation
                    to Covid-19 pandemic. As per a decision of the empowered group, its chairperson issued an order
                    dated 11.5.2020, notifying the Aarogya Setu Data Access and Knowledge Sharing Protocol, 2020, to
                    ensure secure collection of data by the Aarogya Setu mobile application, protection of personal data
                    of individuals and the efficient use and sharing of personal or non-personal data for mitigation and
                    redressal of the Covid-19 pandemic.&quot;
  `,
    image: "https://images.indianexpress.com/2023/02/Aarogya-setu-1200.jpg",
  },
  {
    header: "Adani crisis could derail Modi's economic vision, analyst says",
    body: `Any serious damage to billionaire Gautam Adani's empire could derail
    Indian Prime Minister Narendra Modi's economic plan as the conglomerate operates the largest chunk
    of infrastructure projects — including mines, ports and airports — in Asia's third-largest economy.

    The business group has seen a meltdown following US short seller Hindenburg Research's Jan. 24
    allegations of fraud and market manipulation that at one point wiped out more than $100 billion of
    the group's stock market value.`,
  },
  {
    header: "WHO reports exponential rise in cholera cases in Africa",
    body: `Overall, 10 African countries are affected by cholera. The waterborne disease causes acute watery
    diarrhoea and can kill within hours but is easily treatable.
    Besides Malawi, cases have been reported in neighbouring Mozambique and Zambia, as well as in
    Burundi, Cameroon, the Democratic Republic of the Congo (DRC) and Nigeria.
    Ethiopia, Kenya and Somalia are also responding to outbreaks amid the historic drought in the Horn
    of Africa which has left millions in dire need of humanitarian assistance.
    “We are witnessing a worrying scenario where conflict and extreme climatic events are worsening the
    triggers of cholera and increasing its toll on lives,” said Dr. Matshidiso Moeti, WHO Regional
    Director for Africa.
    As of 29 January, an estimated 26,000 cases and 660 deaths have been reported in the 10 countries.
    WHO warned that if the current trend continues, cases could surpass the number recorded in 2021 -
    the worst year for cholera in Africa in nearly a decade.
    The average case fatality ratio is almost at three per cent, which is above the 2.3 per cent reached
    in 2022 and far exceeds the acceptable level of below one.
    “It's critical for African countries to scale up readiness to quickly detect cases and mount
    comprehensive and timely response,” said Dr. Moeti.`,
  },
];

function addArticle(article) {
  if (localStorage.getItem("articles"))
    newsArticles = JSON.parse(localStorage.getItem("articles"));
  newsArticles.push(article);
  localStorage.setItem("articles", JSON.stringify(newsArticles));
}

function render() {
  if (localStorage.getItem("articles"))
    newsArticles = JSON.parse(localStorage.getItem("articles"));
  if (document.querySelector("#articles-group")) {
    document.querySelector("#articles-group").innerHTML = "";
    newsArticles.map((article) => {
      document.querySelector("#articles-group").innerHTML +=
        createArticle(article);
    });
  }
}

render();
