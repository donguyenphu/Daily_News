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

const ACCESS_TOKEN='ACCESS_TOKEN';
dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');


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

