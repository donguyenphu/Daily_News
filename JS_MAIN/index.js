console.log(123);


const bigPost=document.getElementById('bigPost');
const smallPost=document.getElementById('smallPost');
const allTrendingPost=document.getElementById('allTrendingPost');
const adImage=document.getElementsByClassName('adImage');
const EditorChoice=document.getElementById('EditorChoice');
const GraphEditorPosts=document.getElementById('GraphEditorPosts');
const RecentPosts=document.getElementById('RecentPosts');
const bigPostRecent=document.getElementById('bigPostRecent');
const smallPostRecent=document.getElementById('smallPostRecent');
const popularPostTitle=document.getElementById('popularPostTitle');
const PopularFullPosts=document.getElementById('PopularFullPosts');
const WeeklyBestNews=document.getElementById('WeeklyBestNews');
const FullWeeklyBestNews=document.getElementById('FullWeeklyBestNews');
const hotPosts=document.getElementById('getElementById');
const fullHotPosts=document.getElementById('fullHotPosts');
const AnotherPopular=document.getAnimations('AnotherPopular');
const fullAnotherPopular=document.getElementById('fullAnotherPopular');
const SubmitForm=document.getElementById('SubmitForm');
const fullScrollRightPosts=document.getElementById('fullScrollRightPosts');
const onlyImg02=document.getElementById('onlyImg02');
const SubscribeFollowers=document.getElementById('SubscribeFollowers');


const baseURL='https://apiforlearning.zendvn.com/api/v2';
/// RENDER MENUS

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
            `<li><a href="blog.html?id=${item.id}">${item.name}</a></li>`;
        }
        else {
            /* html */
            html2+=`<li><a href="blog.html?id=${item.id}">${item.name}</a></li>`
        }
    });
    html2+=`</ul>
        </li>`;
    menuFull.innerHTML=html+html2;
});

/// ARTICLES TRENDING

API.call().get('articles/popular?limit=4').then(function(res) {
    const articles=res.data.data;
    console.log('AAAAAAAAAAAAAAAA',articles);
    let htmlMain='';
    let htmlMinor='';

    articles.forEach((item,index) => {
        let thumb=item.thumb;
        let title=item.title;
        let name=item.category.name;
        let date=item.publish_date;
        let author=item.author;
        if (index==1) {
            htmlMain+=
            /* html */
            `
                <div class="banner-post-two big-post">
                    <div class="banner-post-thumb-two">
                        <a href="detail.html?id=${item.id}"><img src="${thumb}" alt="${item.title}"></a>
                    </div>
                    <div class="banner-post-content-two">
                        <a href="blog.html" class="post-tag">${name}</a>
                        <h2 class="post-title bold-underline"><a href="detail.html?id=${item.id}">${title}</a></h2>
                        <div class="blog-post-meta white-blog-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-user"></i>by<a href="author.html">${author}</a></li>
                                <li><i class="flaticon-calendar"></i>${date}</li>
                                <li><i class="flaticon-history"></i>${dayjs(date).fromNow()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }
        else {
            htmlMinor+=
            /* html */
            `
                <div class="banner-post-two small-post">
                    <div class="banner-post-thumb-two">
                        <a href="detail.html?id=${item.id}"><img src="${thumb}" alt=""></a>
                    </div>
                    <div class="banner-post-content-two">
                        <a href="blog.html" class="post-tag">${name}</a>
                        <h2 class="post-title"><a href="detail.html?id=${item.id}">${title}</a></h2>
                        <div class="blog-post-meta white-blog-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-calendar"></i>${date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    bigPost.innerHTML=htmlMain;
    smallPost.innerHTML=htmlMinor;
});

let length=adImage.length;

API.call().get(`articles/popular?limit=${length}`).then(function(res) {
    let articles=res.data.data;
    articles.forEach((item,index) => {
        adImage[index].innerHTML=
            `<a href="#">
                <img src="${item.thumb}" alt="${item.title}" class="w-100">
            </a>`;
    });
});


//// EDITOR CHOICE

API.call().get('articles/popular?limit=3').then(function(res) {
    EditorChoice.innerHTML='<h2 class="title">Tin nhanh</h2>';
    let articles=res.data.data;
    console.log('Editor ARTICLES: ',articles);
    let html='';
    articles.forEach((item) => {
        html+=
        /* html */
        `
            <div class="col-lg-4">
                <div class="editor-post-item">
                    <div class="editor-post-thumb">
                        <a href="detail.html"><img src="${item.thumb}" alt="${item.title}"></a>
                    </div>
                    <div class="editor-post-content">
                        <a href="blog.html" class="post-tag-two">${item.category.name}</a>
                        <h2 class="post-title"><a href="detail.html">${item.title}</a></h2>
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
    GraphEditorPosts.innerHTML=html;
});

/// RECENT POSTS
API.call().get('articles/popular?limit=4').then(function(res) {
    RecentPosts.innerHTML='<h2 class="title">Bài viết gần đây</h2>';
    let htmlBig='';
    let htmlSmall='';
    let articles=res.data.data;
    articles.forEach((item,index) => {
        if (!index) {
            htmlBig+=
            `
                <div class="overlay-post-two">
                    <div class="overlay-post-thumb">
                        <a href="detail.html"><img src="${item.thumb}" alt="${item.title}"></a>
                    </div>
                    <div class="overlay-post-content">
                        <a href="blog.html" class="post-tag">${item.category.name}</a>
                        <h2 class="post-title"><a href="detail.html">${item.title}</a></h2>
                        <div class="blog-post-meta white-blog-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-user"></i>by<a href="author.html">${item.author}</a></li>
                                <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                                <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }
        else {
            htmlSmall+=
            `
                <div class="horizontal-post-two">
                    <div class="horizontal-post-thumb">
                        <a href="detail.html"><img src="${item.thumb}" alt="${item.title}"></a>
                    </div>
                    <div class="horizontal-post-content">
                        <a href="blog.html" class="post-tag">${item.category.name}</a>
                        <h2 class="post-title"><a href="detail.html">${item.title}</a></h2>
                        <div class="blog-post-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    bigPostRecent.innerHTML=htmlBig;
    smallPostRecent.innerHTML=htmlSmall;
});

//// POPULAR ARTICLES 


API.call().get('articles/popular?limit=4').then(function(res) {
    popularPostTitle.innerHTML='<h2 class="title">Bài viết phổ biến</h2>';
    let htmlBig=htmlSmall='';
    let html='';
    let articles=res.data.data;
    articles.forEach((item,index) => {
        if (!index) {
            html+=
            `
                <div class="col-lg-12">
                    <div class="trending-post">
                        <div class="trending-post-thumb">
                            <a href="detail.html"><img src="${item.thumb}" alt="${item.title}"></a>
                        </div>
                        <div class="trending-post-content">
                            <a href="blog.html" class="post-tag">${item.category.name}</a>
                            <h2 class="post-title bold-underline"><a href="detail.html">${item.title}</a></h2>
                            <div class="blog-post-meta">
                                <ul class="list-wrap">
                                    <li><i class="flaticon-user"></i>by<a href="author.html">${item.author}</a></li>
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
                </div>
            `;
        }
        else {
            html+=
            `
                <div class="col-lg-4 col-md-6">
                    <div class="trending-post-two">
                        <div class="trending-post-thumb-two">
                            <a href="detail.html"><img src="${item.thumb}" alt="${item.title}"></a>
                            <a href="blog.html" class="post-tag">${item.category.name}</a>
                        </div>
                        <div class="trending-post-content-two">
                            <h2 class="post-title"><a href="detail.html">${item.title}</a></h2>
                            <div class="blog-post-meta">
                                <ul class="list-wrap">
                                    <li><i class="flaticon-user"></i>by<a href="author.html">${item.author}</a></li>
                                    <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    PopularFullPosts.innerHTML=html;

});

/// WEEKLY BEST NEWS
API.call().get('articles/popular?limit=4').then(function(res) {
    WeeklyBestNews.innerHTML='<h2 class="title"Tin tốt mỗi tuần</h2>';
    let html='';
    let articles=res.data.data;
  
    articles.forEach((item) => {
        html+=
        `
            <div class="weekly-post-item weekly-post-two">
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
    FullWeeklyBestNews.innerHTML=html;
    console.log('FullWeeklyBestNews: ',html);
});


/// HOT POSTS 

API.call().get('articles/popular?limit=4').then(function(res) {
    let articles=res.data.data;
    let html=`<div class="widget-title mb-30">
                <h6 class="title" id="hotPosts">Bài viết thu hút</h6>
                <div class="section-title-line"></div>
            </div>`;
    articles.forEach((item) => {
        html+=
        /* html */
        `
            <div class="popular-post align-items-stretch">
                <div class="thumb">
                    <a href="detail.html" class="h-100"><img src="${item.thumb}" alt="${item.title}" class="h-100 object-fit-cover"></a>
                </div>
                <div class="content">
                    <a href="blog.html" class="post-tag-two">${item.category.name}</a>
                    <h2 class="post-title"><a href="detail.html">${item.title}</a></h2>
                    <div class="blog-post-meta">
                        <ul class="list-wrap">
                            <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });
    console.log('fullHotPosts',html);
    fullHotPosts.innerHTML=html;
});

/// ANOTHER POPULAR

API.call().get('articles/popular?limit=4').then(function(res) {
    let html=`<div class="widget-title mb-30">
                <h6 class="title" id="AnotherPopular">Tin phổ biến</h6>
                <div class="section-title-line"></div>
            </div>`;
    let articles=res.data.data;
    articles.forEach((item,index) => {
        if (!index) {
            html+=`<div class="sidebar-overlay-post">
                        <div class="so-post-thumb">
                            <a href="detail.html"><img src="${item.thumb}" alt="${item.title}"></a>
                        </div>
                        <div class="so-post-content">
                            <a href="blog.html" class="post-tag">${item.category.name}</a>
                            <h4 class="post-title"><a href="detail.html">${item.title}</a></h4>
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
    fullAnotherPopular.innerHTML=html;
});

/// SubmitFormProcess


SubFollow(SubscribeFollowers);

// fullScrollRightPosts

API.call().get('articles/popular?limit=10').then(function(res) {
    let articles=res.data.data;
    let html='';
    articles.forEach((item) => {
        html+=
        `
            <div class="col-lg-3">
                <div class="overlay-post-three">
                    <div class="overlay-post-thumb-three">
                        <a href="detail.html"><img src="${item.thumb}" alt="${item.title}"></a>
                    </div>
                    <div class="overlay-post-content-three">
                        <a href="blog.html" class="post-tag">${item.category.name}</a>
                        <h2 class="post-title bold-underline"><a href="detail.html">${item.title}</a></h2>
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
    fullScrollRightPosts.innerHTML=html;
});


API.call().get('articles/popular?limit=1').then(function(res) {
    const articles=res.data.data;
    let html='';
    articles.forEach((item) => {
        html+=
        `
            <a href="#">
                <img src="${item.thumb}" alt="">
            </a>
        `;
    });
    onlyImg02.innerHTML=html;
});




/// RENDER FOORTER



/// SubscribeFollowers

function SubFollow (SubscribeFollowers) {
    SubscribeFollowers.innerHTML=
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

