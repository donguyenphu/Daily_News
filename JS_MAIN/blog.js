dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
let articlesMain = document.getElementById('articlesMain');
let myPagination = document.getElementById('myPagination');
let overCategoryName = document.getElementById('overCategoryName');
let FullRecentPosts = document.getElementById('FullRecentPosts');
let RecentTitle = document.getElementById('RecentTitle');
let RecentWrapper = document.getElementById('RecentWrapper');


let first = parseInt(urlParams.get('page'));
if (isNaN(first) === true) {
    first = 1;
}
if (isNaN(parseInt(id))) {
    window.location.href = "index.html";
}

console.log('PAGESSSSSSSS:', first, 'AND:', id);


getArticles(first);

let html =
    `
    <div class="widget-title mb-30" id="RecentTitle">
        <h6 class="title">Tin gần đây</h6>
        <div class="section-title-line"></div>
    </div>
`;
API.call().get('articles/popular?limit=3').then(function (res) {
    const articles = res.data.data;
    articles.forEach((item, index) => {
        if (index === 0) {
            html +=
                /* html */
                `   
            <div class="hot-post-item">
                <div class="hot-post-thumb">
                    <a href="detail.html"><img src="${item.thumb}" alt=""></a>
                </div>
                <div class="hot-post-content">
                    <a href="blog.html" class="post-tag">${item.category.name}</a>
                    <h4 class="post-title"><a href="detail.html">${item.title}</a></h4>
                    <div class="blog-post-meta">
                        <ul class="list-wrap">
                            <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                            <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
        }
        else {
            html +=
                /* html */
                `
            <div class="hot-post-item">
                <div class="hot-post-content">
                    <a href="blog.html" class="post-tag">${item.category.name}</a>
                    <h4 class="post-title"><a href="detail.html">${item.title}</a></h4>
                    <div class="blog-post-meta">
                        <ul class="list-wrap">
                            <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                            <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
        }
    });
    FullRecentPosts.innerHTML = html;
});

API.call().get('categories_news').then(function (res) {
    console.log('FOR NOW: ', res);
    const articles = res.data.data;
    console.log(articles);
    let html = '';
    let html2 = `<li class="menu-item-has-children"><a href="#">Danh mục khác</a>
                    <ul class="sub-menu">`;
    articles.forEach((item, index) => {
        if (index < 3) {
            html +=
                /* html */
                `<li><a href="#">${item.name}</a></li>`;
        }
        else {
            /* html */
            html2 += `<li><a href="#">${item.name}</a></li>`
        }
    });
    html2 += `</ul>
        </li>`;
    menuFull.innerHTML = html + html2;
});

myPagination.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('page-item')) {
        first = parseInt(el.innerText);
        console.log('NEWWWW:::::::::::', first);
        getArticles(first);
    }
    if (el.classList.contains('page-item-prev') === true) {
        getArticles(first);
        first--;
        console.log('prevvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv:', first);
        // getArticles(first);
    }
    if (el.classList.contains('page-item-next') === true) {
        getArticles(first);s
        first++;
        console.log('nexxxxxxxxxxxxxxxxxxxx', first);
        
    }
});

function renderPagination(total,first) {
    const disPrev = (first === 1 ? 'pointer-events-none' : '');
    const disNex = (first === total ? 'pointer-events-none' : '');
    myPagination.innerHTML = '';
    let html = `<a class="page-item-prev page-link ${disPrev}">Previous</a>`;
    for (let index = 1; index <= total; index++) {
        let active = (index === first ? 'active pointer-events-none' : '');
        // if (index === first) {
        //     mergeAndPush(first); /// tao trang moi
        // }
        html += `<a class="page-item page-link ${active}">${index}</a>`;
    }
    html += `<a class="page-item-next page-link ${disNex}">Next</a>`;
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
        console.log('TOTAL:::: ', totalPages);
        let TitleAll = '';
        renderPagination(totalPages,first);
        // let overCategoryName='';
        /// for render pagination()
        // renderPagination(totalPages);
        articles.forEach((item) => {
            TitleAll = item.category.name;
            html += /* html */
                `
                <div class="weekly-post-item weekly-post-four">
                    <div class="weekly-post-thumb">
                        <a href="detail.html"><img src="${item.thumb}" alt="${item.title}"></a>
                    </div>
                    <div class="weekly-post-content">
                        <a href="blog.html" class="post-tag">${item.category.name}</a>
                        <h2 class="post-title"><a href="detail.html">${item.title}</a></h2>
                        <div class="blog-post-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                                <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
                            </ul>
                        </div>
                        <p>${item.description}</p>
                        <div class="view-all-btn">
                            <a href="detail.html" class="link-btn">Read More
                                <span class="svg-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                        <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                        <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });

        overCategoryName.innerText = TitleAll;

        articlesMain.innerHTML = html;
    })
    .catch(function (err) {
        window.location.href('index.html');
    });
}

function mergeAndPush(first) {
    urlParams.set('page', first);
    let newPageLink = window.location.pathname + "?" + urlParams.toString();
    history.pushState(null, "", newPageLink);
    getArticles(first);
}


