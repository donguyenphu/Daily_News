console.log(123);
dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');
// TIME
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
const keyword=urlParams.get('keyword');
const RecentTitle=document.getElementById('RecentTitle');
const RecentPostWrapper=document.getElementById('RecentPostWrapper');
const myPagination=document.getElementById('myPagination');
const NumberPostResults=document.getElementById('NumberPostResults');
const articlesMain=document.getElementById('articlesMain');
const tot2=0;
let first = parseInt(urlParams.get('page'));   
if (isNaN(first) === true) {
    first = 1;
}
first=1;
if (isNaN(parseInt(id))) {
    window.location.href = "index.html";
}

getArticles(first);
RecentPostsRender(RecentTitle,RecentPostWrapper);




myPagination.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('page-link')) {
        first = parseInt(el.innerText);
        getArticles(first);
    }
    if (el.classList.contains('page-link-prev') === true) {
        first--;
        getArticles(first);
    }
    if (el.classList.contains('page-link-next') === true) {
        // getArticles(first);
        first++;
        getArticles(first);
    }
});

function renderPagination(total,first) {
    const disPrev = (first === 0 ? 'pointer-events-none' : '');
    if (first===0) first++;
    const disNex = (first === total+1 ? 'pointer-events-none' : '');
    if (first===total+1) first--;
    myPagination.innerHTML = '';
    let html = `<li class="page-item ${disPrev}"><a class="page-link-prev" href="#">Previous</a></li>`;
    for (let index = 1; index <= total; index++) {
        let active = (index === first ? 'active pointer-events-none' : '');
        html += `<li class="page-item ${active}"><a class="page-link" href="#">${index}</a></li>`;
    }
    html += `<li class="page-item ${disNex}"><a class="page-link-next" href="#">Next</a></li>`;
    myPagination.innerHTML = html;
}

function getArticles(first) {
    API.call().get(`articles/search?q=${keyword}&limit=5&page=${first}`).then(res => {
        let html='';
        const articles=res.data.data;
        const Pages=res.data.meta.last_page;
        const totalPost=res.data.meta.total;
        articles.forEach((item) => {
            const regex=new RegExp(keyword,'gi');
            // for post
            let title=item.title.replace(regex,function(match) {
                return `<mark>${match}</mark>`
            });
            let thumb=item.thumb;
            let author=item.author;
            let date=dayjs(item.publish_date).fromNow();
            let info=item.description.replace(regex,function(match) {
                return `<mark>${match}</mark>`;
            });
            /// end 
            html+=`<div class="weekly-post-item weekly-post-four">
                    <div class="weekly-post-thumb">
                        <a href="detail.html?id=${item.id}"><img src="${thumb}" alt="${title}"></a>
                    </div>
                    <div class="weekly-post-content">
                        <a href="category.html" class="post-tag">${item.category.name}</a>
                        <h2 class="post-title"><a href="detail.html?id=${item.id}">${title}</a></h2>
                        <div class="blog-post-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                                <li><i class="flaticon-history"></i>${date}</li>
                            </ul>
                        </div>
                        <p>${info}</p>
                        <div class="view-all-btn">
                            <a href="detail.html?id=${item.id}" class="link-btn">Read More
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
        NumberPostResults.innerHTML=`Tìm thấy ${tot2} bài viết với từ khóa ${keyword}`;
        articlesMain.innerHTML=html;
        console.log(articlesMain.innerHTML,'here');
    })
    .catch(function (error) {
        window.location.href='index.html';
    });
}

function mergeAndPush(first) {
    urlParams.set('page', first);
    let newPageLink = window.location.pathname + "?" + urlParams.toString();
    history.pushState(null, "", newPageLink);
    getArticles(first);
}