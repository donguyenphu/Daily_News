// const API = {
//     call: function() {
//         return axios.create({
//             baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
//         });
//     },
//     callWithToken: function(token) {
//         if (!token) {
//             token = localStorage.getItem('ACCESS_TOKEN');
//         }
//         return axios.create({
//             baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//     }, 
// };

dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');

const queryString=window.location.search;
const urlParams = new URLSearchParams(queryString);
const id=urlParams.get('id');
const articlesMain=document.getElementById('articlesMain');
const myPagination=document.getElementById('myPagination');
const overCategoryName=document.getElementById('overCategoryName');
const FullSubscribeFollowers=document.getElementById('FullSubscribeFollowers');
const FullRecentPosts=document.getElementById('FullRecentPosts');
const RecentNews=document.getElementById('RecentNews');

let first=parseInt(urlParams.get('page'));
if (isNaN(first) === true) {
    first=1;   
}
if (isNaN(parseInt(id))) {
    window.location.href="index.html";
}
getArticles(first);

FullSubscribeFollowers.innerHTML=
`
    <div class="widget-title mb-25">
        <h2 class="title">Mạng xã hội</h2>
        <div class="section-title-line"></div>
    </div>
    <div class="sidebar-social-wrap">
        <ul class="list-wrap">
            <li><a href="https://www.facebook.com/bestofsuy/"><i class="fab fa-facebook-f"></i>facebook</a></li>
            <li><a href="https://www.facebook.com/bestofsuy/"><i class="fab fa-twitter"></i>twitter</a></li>
            <li><a href="https://www.facebook.com/bestofsuy/"><i class="fab fa-instagram"></i>instagram</a></li>
            <li><a href="https://www.facebook.com/bestofsuy/"><i class="fab fa-youtube"></i>youtube</a></li>
            <li><a href="https://www.facebook.com/bestofsuy/"><i class="fab fa-linkedin-in"></i>LinkedIn</a></li>
            <li><a href="https://www.facebook.com/bestofsuy/"><i class="fab fa-pinterest-p"></i>Pinterest</a></li>
        </ul>
    </div>
`;
// API.call().get('categories_news').then(function(res) {
//     console.log('FOR NOW: ',res);
//     const articles=res.data.data;
//     console.log(articles);
//     let html='';
//     let html2=`<li class="menu-item-has-children"><a href="#">Danh mục khác</a>
//                     <ul class="sub-menu">`;
//     articles.forEach((item,index) => {
//        if (index < 3) {
//             html+=
//             /* html */
//             `<li><a href="#">${item.name}</a></li>`;
//         }
//         else {
//             /* html */
//             html2+=`<li><a href="#">${item.name}</a></li>`
//         }
//     });
//     html2+=`</ul>
//         </li>`;
//     menuFull.innerHTML=html+html2;
// });

/// RENDER CATEGORIES

API.call().get(`categories_news/${id}/articles?limit=5&page=${first}`).then(res => {
    const articles=res.data.data;
    console.log('ARTICLESSSSS:',articles);
    let html='';
    let totalPages=res.data.meta.total;
    /// for render pagination()
    renderPagination(totalPages);
    articles.forEach(item => {
        html+=
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
    articlesMain.innerHTML=html;
});

//// 

myPagination.addEventListener('click', function(e) {
    const el=e.target;
    if (el.classList.contains('pageItem')) {
        first=parseInt(el.innerText);
        mergeAndPush(first);
    }
    else if (el.classList.contains('prev') === true) {
        mergeAndPush(first); /// tao trang moi  
        first--;
        console.log('PAGES:::',first);
       
    }
    else if (el.classList.contains('next') === true) {
        mergeAndPush(first);
        first++;
        console.log('PAGES:::',first);
        // mergeAndPush(first);
    }
});


API.call().get('articles/popular?limit=3').then(function(res) {
    let html='';
    const articles=res.data.data;
    let htmlFirst='';
    let htmlRemain='';
    articles.forEach((item,index) => {
        if (index === 0) {
            htmlFirst+=/* html */
            `
            <div class="hot-post-item">
                <div class="hot-post-thumb">
                    <a href="detail.html"><img src="${item.thumb}" alt="${item.title}"></a>
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
            htmlRemain+=/* html */
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
    FullRecentPosts.innerHTML=htmlFirst+htmlRemain;
});


function getArticles(first) {
    API.call().get(`categories_news/${id}/articles?limit=5&page=${first}`).then(res => {
        const articles=res.data.data;
        let html='';
        let totalPages=res.data.meta.total;
        let TitleAll='';
        // let overCategoryName='';
        /// for render pagination()
        renderPagination(totalPages);
        articles.forEach((item) => {
            TitleAll=item.category.name;
            html+= /* html */
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

        overCategoryName.innerText=TitleAll;

        articlesMain.innerHTML=html;
    })
    .catch(function(err) {
        window.location.href('index.html');
    });
}

function mergeAndPush(first) {
    getArticles(first);
    urlParams.set('page', first);
    let newPageLink=window.location.pathname + "?" +urlParams.toString();
    history.pushState(null,"",newPageLink);
}


function renderPagination(total) {
    const disPrev=(first === 1  ? 'pointer-events-none' : '');
    const disNex=(first === total ? 'pointer-events-none' : '');
    let html=`<a href="#" class="prev ${disPrev}">Previous</a>`;
    for (let index = 1; index <= total; index++) {
        let active=(index === first ? 'active pointer-events-none' : '');
        if (index === first) {
            mergeAndPush(first); /// tao trang moi
        }
        html+=`<a href="#" class="pageItem ${active}">${index}</a>`;
    }
    html+=`<a href="#" class="prev ${disNex}">Next</a>`;
    myPagination.innerHTML=html;


    // console.log('MYPAGINATIONHTML:::',myPagination.innerHTML);
}
