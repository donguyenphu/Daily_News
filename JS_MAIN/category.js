dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
let articlesMain = document.getElementById('articlesMain');
let myPagination = document.getElementById('myPagination');
let overCategoryName = document.getElementById('overCategoryName');
let RecentTitle = document.getElementById('RecentTitle');
let RecentPostWrapper = document.getElementById('RecentPostWrapper');
let WrapperNewsletter = document.getElementById('WrapperNewsletter');
let elSiteTitle = document.querySelector('title');
let first = parseInt(urlParams.get('page'));
if (isNaN(first) === true) {
    first = 1;
}
if (isNaN(parseInt(id))) {
    window.location.href = "index.html";
}


elSiteTitle.innerHTML=`${categoryArray[parseInt(id)]}`;

getArticles(first);
RecentPostsRender(RecentTitle, RecentPostWrapper);




myPagination.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('number-link')) {
        first = parseInt(el.innerText);
        getArticles(first);
    }
    if (el.classList.contains('page-link-prev')) {
        first--;
        getArticles(first);
    }
    if (el.classList.contains('page-link-next')) {
        first++;
        getArticles(first);
    }
});

function renderPagination(total, currentPage) {
    const disPrev = (currentPage === 1 ? 'pointer-events-none' : '');
    const disNex = (currentPage === total ? 'pointer-events-none' : '');
    let html = `<li class="page-item ${disPrev}"><a class="page-link-prev page-link ${disPrev}" href="#">Previous</a></li>`;
    for (let index = 1; index <= total; index++) {
        let active = (index === currentPage ? 'active pointer-events-none' : '');
        html += `<li class="page-item ${active}"><a class="page-link number-link ${active}" href="#">${index}</a></li>`;
    }
    html += `<li class="page-item ${disNex}"><a class="page-link-next page-link ${disNex}" href="#">Next</a></li>`;
    myPagination.innerHTML = html;
}
function getArticles(first) {
    API.call().get(`categories_news/${id}/articles?limit=5&page=${first}`).then(res => {
        const articles = res.data.data;
        let html = '';
        let totalPages = res.data.meta.total;
        if (first >= 1 && first <= totalPages) {
            urlParams.set('page', first);
            let newPageLink = window.location.pathname + "?" + urlParams.toString();
            history.pushState(null, "", newPageLink);
        }
        let TitleAll = '';
        renderPagination(totalPages, first);
        articles.forEach((item) => {
            TitleAll = item.category.name;
            html += /* html */`<div class="weekly-post-item weekly-post-four">
                <div class="weekly-post-thumb">
                    <a href="detail.html?id=${item.id}"><img src="${item.thumb}" alt="${item.title}"></a>
                </div>
                <div class="weekly-post-content">
                    <h2 class="post-title"><a href="detail.html?id=${item.id}">${item.title}</a></h2>
                    <div class="blog-post-meta">
                        <ul class="list-wrap">
                            <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                            <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
                        </ul>
                    </div>
                    <p>${item.description}</p>
                    <div class="view-all-btn">
                        <a href="detail.html?id=${item.id}" class="link-btn">Đọc thêm
                            <span class="svg-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                    <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                    <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>`;
        });
        overCategoryName.innerText = TitleAll;
        elSiteTitle.innerText = TitleAll
        articlesMain.innerHTML = html;
    })
        .catch(function (err) {
            window.location.href('index.html');
        });
}



