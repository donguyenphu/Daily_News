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
// RENDER MENUS

// let first=parseInt(urlParams.get('page')); ///////
let first=parseInt(urlParams.get('page'));
if (isNaN(first) === true) {
    // neo 
    // console.log('FALSE:::::');
    first=1;   
}
if (isNaN(parseInt(id))) {
    window.location.href="index.html";
}

console.log('PAGESSSSSSSS:',first,'AND:',id);


getArticles(first);


API.call().get('categories_news').then(function(res) {
    console.log('FOR NOW: ',res);
    const articles=res.data.data;
    console.log(articles);
    let html='';
    let html2=`<li class="menu-item-has-children"><a href="#">Danh mục khác</a>
                    <ul class="sub-menu">`;
    articles.forEach((item,index) => {
       if (index < 3) {
            html+=
            /* html */
            `<li><a href="#">${item.name}</a></li>`;
        }
        else {
            /* html */
            html2+=`<li><a href="#">${item.name}</a></li>`
        }
    });
    html2+=`</ul>
        </li>`;
    menuFull.innerHTML=html+html2;
});

/// RENDER CATEGORIES

// API.call().get(`categories_news/${id}/articles?limit=5&page=${first}`).then(res => {
//     const articles=res.data.data;
//     console.log('ARTICLESSSSS:',articles);
//     let html='';
//     let totalPages=res.data.meta.total;
//     /// for render pagination()
//     renderPagination(totalPages);
//     articles.forEach(item => {
//         /* html */
//         html+=
//         `   
//             <div class="weekly-post-item weekly-post-four">
//                 <div class="weekly-post-thumb">
//                     <a href="detail.html"><img src="${item.thumb}" alt="${item.title}"></a>
//                 </div>
//                 <div class="weekly-post-content">
//                     <a href="blog.html" class="post-tag">${item.category.name}</a>
//                     <h2 class="post-title"><a href="detail.html">${item.title}</a></h2>
//                     <div class="blog-post-meta">
//                         <ul class="list-wrap">
//                             <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
//                             <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
//                         </ul>
//                     </div>
//                     <p>${item.description}</p>
//                     <div class="view-all-btn">
//                         <a href="detail.html" class="link-btn">Read More
//                             <span class="svg-icon">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
//                                     <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
//                                     <path d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z" fill="currentColor" />
//                                 </svg>
//                             </span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         `;
//     });
//     articlesMain.innerHTML=html;
// });

//// 

myPagination.addEventListener('click', function(e) {
    const el=e.target;
    if (el.classList.contains('page-item')) {
        first=parseInt(el.innerText);
        console.log('NEWWWW:::::::::::',first);
        mergeAndPush(first);    
    }
    else if (el.classList.contains('prev') === true) {
        first--;
        console.log('prevvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv:',first);
        mergeAndPush(first); /// tao trang moi
    }
    else if (el.classList.contains('next') === true) {
        first++;
        console.log('nexxxxxxxxxxxxxxxxxxxx',first);
        mergeAndPush(first);
    }
});

function renderPagination(total) {
    const disPrev=(first === 1  ? 'pointer-events-none' : '');
    const disNex=(first === total ? 'pointer-events-none' : '');
    let html=`<li class="prev ${disPrev}"><a class="page-link" href="#">Previous</a></li>`;
    for (let index = 1; index <= total; index++) {
        let active=(index === first ? 'active pointer-events-none' : '');
        if (index === first) {
            mergeAndPush(first); /// tao trang moi
        }
        html+=`<li class="page-item ${active}"><a class="page-link" href="#">${index}</a></li>`;
    }
    html+=`<li class="next ${disNex}"><a class="page-link" href="#">Next</a></li>`;
    myPagination.innerHTML=html;
}

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
    urlParams.set('page', first);
    let newPageLink=window.location.pathname + "?" +urlParams.toString();
    history.pushState(null,"",newPageLink);
    getArticles(first);
}


