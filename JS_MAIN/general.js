const API = {
    call: function() {
        return axios.create({
            baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
        });
    },
    callWithToken: function(token) {
        if (!token) {
            token = localStorage.getItem('ACCESS_TOKEN');
        }
        return axios.create({
            baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }, 
};

const inpSearch=document.getElementById('inpSearch');
const ACCESS_TOKEN='ACCESS_TOKEN';
dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');

inpSearch.addEventListener('keyup', function(res) {
    if (res.key == 'Enter') {
        let word=inpSearch.value.trim();
        if (word.length === 0) {
            alert('Khong hop le!');
            inpSearch.value='';
        }
        else {
            inpSearch.value='';
            window.location.href=`search.html?keyword=${word}`;
        }
    }
});

function showErrorMessages(errors,el) {
    let errString='';
    for (let property in errors) {
        errString+=/* html */ `<li>${errors[property]}</li>`;
        // console.log(`${property}: ${errors[property]}`);
    }
    el.innerHTML= /* html */
    `<div class="alert alert-danger" role="alert">
        <ul>${errString}</ul>
    </div>`;
}

function toastMessage(check) {
    Toastify ({
    text: `${check}`,
    duration: 3000,
    close: true,
    }).showToast();
}

function getRecentPosts(FullRecentPosts,RecentTitle,RecentWrapper) {
    RecentTitle.innerHTML=
    /* html */
    `
    <h6 class="title">Tin gần đây</h6>
    <div class="section-title-line"></div>
    `;
    let html='';
    API.call().get('articles/popular?limit=3').then(function(res) {
        const articles=res.data.data;
        articles.forEach((item,index) => {
            if (index===0) {
                html+=
                /* html */
                `   
                <div class="hot-post-item">
                    <div class="hot-post-thumb">
                        <a href="detail.html"><img src="assets/img/blog/blog_rc_post.jpg" alt=""></a>
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
                html+=
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
    });
    RecentWrapper.innerHTML=html;
}
function Newsletter(WrapperNewsletter) {
    WrapperNewsletter.innerHTML=
    `
        <div class="sidebar-newsletter" id="WrapperNewsletter">
            <div class="icon"><i class="flaticon-envelope"></i></div>
            <h4 class="title">TRANG TIN TỨC HIỆN ĐẠI    </h4>
            <p>Đăng kí để nhận thông báo mới nhất</p>
            <div class="sidebar-newsletter-form-two">
                <form action="#">
                    <div class="form-grp">
                       
                        <button type="submit" class="btn" href="login.html">Đăng nhập ngay</button>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkbox">
                        <label for="checkbox">Lưu thông tin cá nhân</label>
                    </div>
                </form>
            </div>
        </div>
    `;
}
function RecentPostsRender(RecentTitle,RecentPostWrapper) {
    RecentTitle.innerHTML=
    `
        <h6 class="title">Tin gần đây</h6>
        <div class="section-title-line"></div>
    `;
    API.call().get('articles/popular?limit=4').then(function(res) {
        const articles=res.data.data;
        let html='';
        articles.forEach((item,index) => {
            if (index === 0) {
                html +=
                    /* html */
                    `   
                <div class="hot-post-item">
                    <div class="hot-post-thumb">
                        <a href="detail.html?id=${item.id}"><img src="${item.thumb}" alt=""></a>
                    </div>
                    <div class="hot-post-content">
                        <a href="blog.html" class="post-tag">${item.category.name}</a>
                        <h4 class="post-title"><a href="detail.html?id=${item.id}">${item.title}</a></h4>
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
                        <h4 class="post-title"><a href="detail.html?id=${item.id}">${item.title}</a></h4>
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
        RecentPostWrapper.innerHTML=html;
    });
}

function preloader() {
	$('#preloader').delay(1000).fadeOut();
};

/// <input type="text" placeholder="Enter your e-mail">

