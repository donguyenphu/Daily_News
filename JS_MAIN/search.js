console.log(1231231231231123);
dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');
// TIME
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
const keyword=urlParams.get('keyword');
const RecentTitle=document.getElementById('RecentTitle');
const RecentPostWrapper=document.getElementById('RecentPostWrapper');
const myPagination=document.getElementById('myPagination');
const NumberPostResults=document.getElementById('NumberPostResults');
const articlesMain=document.getElementById('articlesMain');
const tot2=0;


const id = urlParams.get('id');
let first = parseInt(urlParams.get('page'));   
if (isNaN(first) === true) {
    first = 1;
}
if (isNaN(parseInt(first))===true) {
    window.href.location('index.html');
}
// first=1;

getArticles(first);
RecentPostsRender(RecentTitle,RecentPostWrapper);




myPagination.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('number-link')) {
        first = parseInt(el.innerText);
        getArticles(first);
    }
    if (el.classList.contains('page-link-prev')) {
        first=parseInt(first);
        first--;
        getArticles(first);
    }
    if (el.classList.contains('page-link-next')) {
        first=parseInt(first);
        first++;
        getArticles(first);
    }
});

function renderPagination(total, first) {
    let disPrev = (first <=  0 ? 'pointer-events-none' : '');
    if (first <= 0) first=Math.max(first,1);
    let disNex = (first >= total + 1 ? 'pointer-events-none' : '');
    if (first >= total + 1) first=Math.min(first,total);
    console.log('RENDER',first);
    
    let html = `<li class="page-item ${disPrev}"><a class="page-link-prev page-link" href="#">Previous</a></li>`;
    for (let index = 1; index <= total; index++) {
        let active = (index === first ? 'active pointer-events-none' : '');
        html += `<li class="page-item ${active}"><a class="page-link number-link" href="#">${index}</a></li>`;
    }
    html += `<li class="page-item ${disNex}"><a class="page-link-next page-link" href="#">Next</a></li>`;
    myPagination.innerHTML = html;
}

function getArticles(first) {
    API.call().get(`articles/search?q=${keyword}&limit=5&page=${first}`).then(res => {
        console.log('CURRENT PAGES NOW:',first);
        
        const Pages=res.data.meta.last_page;
        const totalPost=res.data.meta.total;
        
        if (first >= 1 && first <= Pages) {
            urlParams.set('page', first);
            let newPageLink = window.location.pathname + "?" + urlParams.toString();
            history.pushState(null, "", newPageLink);
        }
        renderPagination(Pages,first);
        if (first <= 0) first=1;
        if (first >= Pages + 1) first=Pages;
        if (first >=1 && first <= Pages) {
            let html='';
            const articles=res.data.data;
            articles.forEach((item) => {
                const regex=new RegExp(keyword,'gi');
                let title=item.title.replace(regex,function(match) {
                    return `<mark>${match}</mark>`
                });
                let thumb=item.thumb;
                let author=item.author;
                let date=dayjs(item.publish_date).fromNow();
                let info=item.description.replace(regex,function(match) {
                    return `<mark>${match}</mark>`;
                });
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
                    </div>
                `;
            }); 
            articlesMain.innerHTML=html;
        }
        NumberPostResults.innerHTML=`Tìm thấy ${totalPost} bài viết với từ khóa ${keyword}`;
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