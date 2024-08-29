const bigPost = document.getElementById('bigPost');
const smallPost = document.getElementById('smallPost');
const allTrendingPost = document.getElementById('allTrendingPost');
const adImage = document.getElementById('adImage');
const EditorChoice = document.getElementById('EditorChoice');
const GraphEditorPosts = document.getElementById('GraphEditorPosts');
const RecentPosts = document.getElementById('RecentPosts');
const bigPostRecent = document.getElementById('bigPostRecent');
const smallPostRecent = document.getElementById('smallPostRecent');
const popularPostTitle = document.getElementById('popularPostTitle');
const PopularFullPosts = document.getElementById('PopularFullPosts');
const WeeklyBestNews = document.getElementById('WeeklyBestNews');
const FullWeeklyBestNews = document.getElementById('FullWeeklyBestNews');
const hotPosts = document.getElementById('getElementById');
const fullHotPosts = document.getElementById('fullHotPosts');
const AnotherPopular = document.getAnimations('AnotherPopular');
const fullAnotherPopular = document.getElementById('fullAnotherPopular');
const SubmitForm = document.getElementById('SubmitForm');
const fullScrollRightPosts = document.getElementById('fullScrollRightPosts');
const onlyImg02 = document.getElementById('onlyImg02');
const SubscribeFollowers = document.getElementById('SubscribeFollowers');
const elCategoriesWithArticles = document.getElementById('categoriesWithArticles');

let item=localStorage.getItem('ACCESS_TOKEN');  



const baseURL = 'https://apiforlearning.zendvn.com/api/v2';
/// RENDER MENUS

API.call().get('categories_news').then(function (res) {
    const articles = res.data.data;
    let html = '';
    let html2 = `<li class="menu-item-has-children"><a href="#">Danh mục khác</a>
                    <ul class="sub-menu">`;
    articles.forEach((item, index) => {
        if (index < 3) {
            html +=/* html */
                `<li><a href="category.html?id=${item.id}">${item.name}</a></li>`;
        }
        else {
            /* html */
            html2 += `<li><a href="category.html?id=${item.id}">${item.name}</a></li>`
        }
    });
    html2 += `</ul>
        </li>`;
    menuFull.innerHTML = html + html2;
});

/// ARTICLES TRENDING

API.call().get('articles/popular?limit=5').then(function (res) {
    const articles = res.data.data;
    let htmlMain = '';
    let htmlMinor = '';
    
    articles.forEach((item, index) => {
        let thumb = item.thumb;
        let title = item.title;
        let name = item.category.name;
        let date = item.publish_date;
        let author = item.author;
        if (index === 0) {
            htmlMain +=
                /* html */
                `
                <div class="banner-post-two big-post">
                    <div class="banner-post-thumb-two">
                        <a href="detail.html?id=${item.id}"><img src="${thumb}" alt="${item.title}"></a>
                    </div>
                    <div class="banner-post-content-two">
                        <a href="category.html?id=${item.category.id}" class="post-tag">${name}</a>
                        <h2 class="post-title bold-underline"><a href="detail.html?id=${item.id}">${title}</a></h2>
                        <div class="blog-post-meta white-blog-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-user"></i><a href="author.html">${author}</a></li>
                                <li><i class="flaticon-calendar"></i>${date}</li>
                                <li><i class="flaticon-history"></i>${dayjs(date).fromNow()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else if (index < 4) {
            htmlMinor +=
                /* html */
                `
                <div class="banner-post-two small-post">
                    <div class="banner-post-thumb-two">
                        <a href="detail.html?id=${item.id}"><img src="${thumb}" alt=""></a>
                    </div>
                    <div class="banner-post-content-two">
                        <a href="category.html?id=${item.category.id}" class="post-tag">${name}</a>
                        <h2 class="post-title"><a h ref="detail.html?id=${item.id}">${title}</a></h2>
                        <div class="blog-post-meta white-blog-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-calendar"></i>${date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else {
            adImage.src = item.thumb
        }
    });
    bigPost.innerHTML = htmlMain;
    smallPost.innerHTML = htmlMinor;
});


//// EDITOR CHOICE

API.call().get('articles/popular?limit=6').then(function (res) {
    let articles = res.data.data;
    let html = '';
    articles.forEach((item) => {
        html +=
            /* html */
            `
            <div class="col-lg-4">
                <div class="editor-post-item">
                    <div class="editor-post-thumb">
                        <a href="detail.html?id=${item.id}"><img src="${item.thumb}" alt="${item.title}"></a>
                    </div>
                    <div class="editor-post-content">
                        <a href="category.html?id=${item.category.id}" class="post-tag-two">${item.category.name}</a>
                        <h2 class="post-title"><a href="detail.html?id=${item.id}">${item.title}</a></h2>
                        <div class="blog-post-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    GraphEditorPosts.innerHTML = html;
    $('#GraphEditorPosts').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        appendArrows: ".editor-nav",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });
});

/// RECENT POSTS
//// POPULAR ARTICLES 


function renderCWATitle(item) {
    return`<div class="section-title-wrap mb-30">
        <div class="section-title" id="popularPostTitle">
            <h2 class="title">${item.name}</h2>
        </div>
        <div class="view-all-btn">
            <a href="category.html?id=${item.id}" class="link-btn">View All
                <span class="svg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                        <path
                            d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z"
                            fill="currentColor" />
                        <path
                            d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z"
                            fill="currentColor" />
                    </svg>
                </span>
            </a>
        </div>
        <div class="section-title-line"></div>
    </div>`;
}

function renderCWALargePostEven(item, category) {
    return/* html */ `<div class="col-54" id="bigPostRecent">
        <div class="overlay-post-two">
            <div class="overlay-post-thumb">
                <a href="detail.html?id=${item.id}"><img src="${item.thumb}" alt="${item.title}"></a>
            </div>
            <div class="overlay-post-content">
                <h2 class="post-title"><a href="detail.html?id=${item.id}">${item.title}</a></h2>
                <div class="blog-post-meta white-blog-meta">
                    <ul class="list-wrap">
                        <li><i class="flaticon-user"></i><a href="author.html">${item.author}</a></li>
                        <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                        <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;
}

function renderCWASmallPostsEven(items, category) {
    let html = '';
    items.forEach((item) => {
        // const {id, thumb, title} = item;
        html += /*html */`
        <div class="horizontal-post-two">
            <div class="horizontal-post-thumb">
                <a href="detail.html?id=${item.id}"><img src="${item.thumb}" alt="${item.title}"></a>
            </div>
            <div class="horizontal-post-content">
                <h2 class="post-title"><a href="detail.html?id=${item.id}">${item.title}</a></h2>
                <div class="blog-post-meta">
                    <ul class="list-wrap">
                        <li><i class="flaticon-calendar"></i>${dayjs(item.publish_date).fromNow()}</li>
                    </ul>
                </div>
            </div>
        </div>`;
    });
    return html;
}

{/* <a href="category.html?id=${item.id}" class="post-tag">Gadget</a> */}

function renderCWALargePostOdd(item, category) {
    const {description, id, thumb, title} = item;
    return /*html */`
    <div class="col-lg-12">
        <div class="trending-post">
            <div class="trending-post-thumb">
                <a href="detail.html?id=${id}"><img src="${thumb}" alt="${title}"></a>
            </div>
            <div class="trending-post-content">
                <h2 class="post-title bold-underline"><a href="detail.html?id=${item.id}">${title}</a></h2>
                <div class="blog-post-meta">
                    <ul class="list-wrap">
                        <li><i class="flaticon-user"></i><a
                                href="author.html">${item.author}</a></li>
                        <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                        <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
                    </ul>
                </div>
                <p>${description}</p>
                <div class="view-all-btn">
                    <a href="detail.html?id=${id}" class="link-btn">Đọc thêm
                        <span class="svg-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"
                                fill="none">
                                <path
                                    d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z"
                                    fill="currentColor" />
                                <path
                                    d="M1.07692 10L0 8.92308L7.38462 1.53846H0.769231V0H10V9.23077H8.46154V2.61538L1.07692 10Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>`
}

function renderCWASmallPostsOdd(items, category) {
    let html = '';
    items.forEach(item => {
        const {id, thumb, title,publish_date,author} = item;
        const {id: categoryId, name: categoryName} = category;
        html += /*html */`
        <div class="col-lg-4 col-md-6">
            <div class="trending-post-two">
                <div class="trending-post-thumb-two">
                    <a href="detail.html?id=${id}"><img src="${thumb}" alt="${title}"></a>
                </div>
                <div class="trending-post-content-two">
                    <h2 class="post-title"><a href="detail.html?id=${id}">${title}</a></h2>
                    <div class="blog-post-meta">
                        <ul class="list-wrap">
                            <li><i class="flaticon-user"></i><a
                                    href="author.html">${author}</a></li>
                            <li><i class="flaticon-calendar"></i>${publish_date}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
    });
    return html;
}


API.call().get('categories_news/articles?limit_cate=2&limit=4').then(res => {
    const data = res.data.data;
    let html = '';
    
    data.forEach((item, idx) => {
        const articles = item.articles; // 4
        const largePost = articles.shift(); // 1
        const smallPosts = articles; // 3

        if (idx % 2 === 0) {
            html += `
            <div class="recent-post-wrap">
                ${renderCWATitle(item)}
                <div class="row">
                    ${renderCWALargePostEven(largePost, item)}
                    <div class="col-46" id="smallPostRecent">
                        ${renderCWASmallPostsEven(smallPosts,item)}
                    </div>
                </div>
            </div>`
        } else {
            html += `
            <div class="trending-post-wrap">
                ${renderCWATitle(item)}
                <div class="row justify-content-center" id="PopularFullPosts">
                    ${renderCWALargePostOdd(largePost, item)}
                    ${renderCWASmallPostsOdd(smallPosts, item)}
                </div>
            </div>`
        }
    });
    elCategoriesWithArticles.innerHTML = html;
})

/// WEEKLY BEST NEWS
API.call().get('articles/popular?limit=4').then(function (res) {
    WeeklyBestNews.innerHTML = '<h2 class="title">Tin tốt mỗi tuần</h2>';
    let html = '';
    let articles = res.data.data;

    articles.forEach((item) => {
        html +=
        /* html */
            `
            <div class="weekly-post-item weekly-post-two">
                <div class="weekly-post-thumb">
                    <a href="detail.html?id=${item.id}"><img src="${item.thumb}" alt="${item.title}"></a>
                </div>
                <div class="weekly-post-content">
                    <a href="category.html?id=${item.id}" class="post-tag">${item.category.name}</a>
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
            </div>
        `;
    });
    FullWeeklyBestNews.innerHTML = html;
});


/// HOT POSTS 

API.call().get('articles/popular?limit=5').then(function (res) {
    let articles = res.data.data;
    let html = `<div class="widget-title mb-30">
                <h6 class="title" id="hotPosts">Bài viết thu hút</h6>
                <div class="section-title-line"></div>
            </div>`;
    articles.forEach((item) => {
        html +=
            /* html */
            `
            <div class="popular-post align-items-stretch">
                <div class="thumb">
                    <a href="detail.html?id=${item.id}" class="h-100"><img src="${item.thumb}" alt="${item.title}" class="h-100 object-fit-cover"></a>
                </div>
                <div class="content">
                    <a href="category.html?id=${item.id}" class="post-tag-two">${item.category.name}</a>
                    <h2 class="post-title"><a href="detail.html?id=${item.id}">${item.title}</a></h2>
                    <div class="blog-post-meta">
                        <ul class="list-wrap">
                            <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });
    fullHotPosts.innerHTML = html;
});

/// ANOTHER POPULAR

API.call().get('articles/popular?limit=4').then(function (res) {
    let html = `<div class="widget-title mb-30">
                <h6 class="title" id="AnotherPopular">Tin phổ biến</h6>
                <div class="section-title-line"></div>
            </div>`;
    let articles = res.data.data;
    articles.forEach((item, index) => {
        if (!index) {
            html += `<div class="sidebar-overlay-post">
                        <div class="so-post-thumb">
                            <a href="detail.html?id=${item.id}"><img src="${item.thumb}" alt="${item.title}"></a>
                        </div>
                        <div class="so-post-content">
                            <a href="category.html?id=${item.id}" class="post-tag">${item.category.name}</a>
                            <h4 class="post-title"><a href="detail.html?id=${item.id}">${item.title}</a></h4>
                            <div class="blog-post-meta white-blog-meta">
                                <ul class="list-wrap">
                                    <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                                    <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
        }
        else {

        }
    });
    fullAnotherPopular.innerHTML = html;
});

/// SubmitFormProcess


SubFollow(SubscribeFollowers);

// fullScrollRightPosts

API.call().get('articles/popular?limit=10').then(function (res) {
    let articles = res.data.data;
    let html = '';
    articles.forEach((item) => {
        html +=
            `
            <div class="col-lg-3">
                <div class="overlay-post-three">
                    <div class="overlay-post-thumb-three">
                        <a href="detail.html?id=${item.id}"><img src="${item.thumb}" alt="${item.title}"></a>
                    </div>
                    <div class="overlay-post-content-three">
                        <a href="category.html?id=${item.id}" class="post-tag">${item.category.name}</a>
                        <h2 class="post-title bold-underline"><a href="detail.html?id=${item.id}">${item.title}</a></h2>
                        <div class="blog-post-meta white-blog-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-user"></i>by<a href="author.html">${item.author}</a></li>
                                <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                                <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    fullScrollRightPosts.innerHTML = html;
    $('#fullScrollRightPosts').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });
});


API.call().get('articles/popular?limit=1').then(function (res) {
    const articles = res.data.data;
    let html = '';
    articles.forEach((item) => {
        html +=
            `
            <a href="#">
                <img src="${item.thumb}" alt="">
            </a>
        `;
    });
    onlyImg02.innerHTML = html;
});




/// RENDER FOORTER



/// SubscribeFollowers

function SubFollow(SubscribeFollowers) {
    SubscribeFollowers.innerHTML =
        `   
        <div class="widget-title mb-30">
            <h6 class="title">Người truy cập</h6>
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
}

