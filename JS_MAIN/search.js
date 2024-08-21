console.log(123);
dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');
// TIME
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
const keyword=urlParams.get('keyword'); 
let id = urlParams.get('id');
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

        NumberPostResults.innerHTML=`Tìm thấy ${tot2} bài viết với từ khóa ${keyword}`;
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