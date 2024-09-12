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
/// thầy xem giúp em với thầy
// ủa anh thấy page 1 mà em
/// thầy đợi e chút thầy
/// e xem còn bug nào ko fix luôn thầy
/// e load lại lại = 3 thầy
// là đang bị gì em
/// thầy check giúp e với ạ
// anh chưa hiểu đang bị gì
// có thấy lỗi gì đâu
// show lỗi đi em
// url có tham số page=3 đại diện cho đang ở trang số 3, thì em load lại nó ở tragn số 3 là đúng rồi em, chứ có gì sai đâu, giờ chuenr qua trang 4 đi load lại nó cũng sẽ là 4 thôi, thử vào các trang báo xem
/// chắc phải reset về 1 hả thầy
// sao menu chỗ category k gán link gì hết vậy em
/// e quên thầy ạ, thầy đợi e chút ạ
/// bắt sk vào <a> với <li> nó khác như thế nào ấy thầy
// anh dã ví dụ dĩa cơm với miếng thịt heo rổi mà
// sao giờ hỏi lại này 
// sửa nhiêu đó thôi, anh nhắc nhiều lần bắt sự kiện vào thẻ a rồi, bên dưới em vẫn bắt class page-item là thẻ li
/// em cảm ơn thầy ạ
///////////////////////// =)
/// e làm được rồi thầy ơiii
let first = parseInt(urlParams.get('page'));
// console.log('PAGES:',first);
if (isNaN(first) === true) {
    first = 1;
}
if (isNaN(parseInt(id))) {
    window.location.href = "index.html"; /// thong tin trang ko hop le
}
// first=1;
console.log('FIRST PAGE:',first);




getArticles(first);
RecentPostsRender(RecentTitle, RecentPostWrapper);




myPagination.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('number-link')) {
        first = parseInt(el.innerText);
        getArticles(first);
    }
    if (el.classList.contains('page-link-prev')) {
        // if (first > 1) {
        first=parseInt(first);
        first--;
        
        getArticles(first);
        // }
    }
    if (el.classList.contains('page-link-next')) {
        // getArticles(first);
        first=parseInt(first);
        first++;
        getArticles(first);
    }
});

function renderPagination(total, first) {
    const disPrev = (first === 0 ? 'pointer-events-none' : '');
    if (first === 0) first++;
    const disNex = (first === total + 1 ? 'pointer-events-none' : '');
    if (first === total + 1) first--;
    let html = `<li class="page-item ${disPrev}"><a class="page-link-prev page-link" href="#">Previous</a></li>`;
    for (let index = 1; index <= total; index++) {
        let active = (index === first ? 'active pointer-events-none' : '');
        html += `<li class="page-item ${active}"><a class="page-link number-link" href="#">${index}</a></li>`;
    }
    html += `<li class="page-item ${disNex}"><a class="page-link-next page-link" href="#">Next</a></li>`;
    myPagination.innerHTML = html;
}
//// first bi NAN
function getArticles(first) {
    if (isNaN(first)) {
        console.log('Is NaN');
    }
    API.call().get(`categories_news/${id}/articles?limit=5&page=${first}`).then(res => {
        const articles = res.data.data;
        let html = '';
        let totalPages = res.data.meta.total;
        if (first >= 1 && first <= totalPages) {
            // console.log(first);
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
        articlesMain.innerHTML = html;
    })
    .catch(function (err) {
        window.location.href('index.html');
    });
}

// function mergeAndPush(first) {
//     urlParams.set('page', first);
//     let newPageLink = window.location.pathname + "?" + urlParams.toString();
//     history.pushState(null, "", newPageLink);
//     getArticles(first);
// }


