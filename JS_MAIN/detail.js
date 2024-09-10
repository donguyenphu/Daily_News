// 1:30p comments
let WrapperNewsletter=document.getElementById('WrapperNewsletter');
let RecentPostWrapper=document.getElementById('RecentPostWrapper');
let RecentTitle=document.getElementById('RecentTitle');
let DetailWrapper=document.getElementById('DetailWrapper');
let authorWrapper=document.getElementById('authorWrapper');
const PreNexPosts=document.getElementById('PreNexPosts');
const commentForm=document.getElementById('commentForm');
const commentMessage=document.getElementById('commentMessage');
const listComment=document.getElementById('listComment');
const commentNotice=document.getElementById('commentNotice');
let breadCrumbArea=document.getElementById('breadCrumbArea');
let totalComments=document.getElementById('totalComments');
let commentContent=document.getElementById('commentContent');

const queryString=window.location.search;
const urlParams = new URLSearchParams(queryString);
const id=urlParams.get('id');



RecentPostsRender(RecentTitle,RecentPostWrapper);

let emailUser='';
let nameUser='';
let COMMENTS=JSON.parse(localStorage.getItem('COMMENTS')) || [];

let parentCommentId=null;
let thisArticleComment=COMMENTS.filter(item => item.articleId === id);
let html2='';
let html3='';
let tmp=0;   
API.callWithToken().get('/auth/me').then((res) => {
    emailUser=res.data.data.email;
    nameUser=res.data.data.name;
    commentForm.classList.remove('d-none');
    commentNotice.classList.add('d-none');
}).catch(err => {
    commentForm.classList.add('d-none');
    commentNotice.classList.remove('d-none');
}).finally(decisionRender => {
    renderComment(COMMENTS);
});

commentForm.addEventListener('submit', function(res) {
    res.preventDefault();
    const val=commentContent.value.trim();
    if (val) {
        const objSave = {
            id: self.crypto.randomUUID(),
            email: emailUser,
            content: val,
            dateTime: dayjs().format('YYYY-MM-DD H:mm:ss'),
            articleId: id,
        }
        COMMENTS.unshift(objSave);
        localStorage.setItem('COMMENTS', JSON.stringify(COMMENTS));
        thisArticleComment=COMMENTS.filter(item => item.articleId === id);
        renderComment(thisArticleComment);
    }  
    else {
        alert('PLEASE FILL IN THE COMMENT AREA!');
    }
    commentContent.value='';
});

API.call().get('articles/popular?limit=1').then(function(res2) {
    let articles=res2.data.data;
    articles.forEach((item2) => {
        html2+=
        `
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="detail-inner-img">
                        <img src="${item2.thumb}" alt="${item2.title}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="detail-inner-content">
                        <a href="category.html" class="post-tag">${item2.category.name}</a>
                        <h4 class="post-title"><a href="detail.html?id=${item2.id}">${item2.title}</a></h4>
                        <div class="blog-post-meta">
                            <ul class="list-wrap">
                                <li><i class="flaticon-calendar"></i>${item2.publish_date}</li>
                                <li><i class="flaticon-history"></i>${dayjs(item2.publish_date).fromNow()}</li>
                            </ul>
                        </div>
                        ${item2.description}
                        <ul class="list-wrap">
                            <li><i class="fas fa-check"></i>Gutenberg Integration</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });
    html3=html2;
});

/*
{
    id,
    email,
    content,
    dateTime,
    articleId
}
*/

API.call().get(`articles/${id}`).then(function(res) {
    const item=res.data.data;
    let html='';
    html+=/* html */`<div class="detail-content-top">
        <a href="category.html" class="post-tag">${item.category.name}</a>
        <h2 class="title">${item.title}</h2>
        <div class="bd-content-inner">
            <div class="blog-post-meta">
                <ul class="list-wrap">
                    <li><i class="flaticon-user"></i>by<a href="author.html">${item.author}</a></li>
                    <li><i class="flaticon-calendar"></i>${item.publish_date}</li>
                    <li><i class="flaticon-chat"></i><a href="detail.html?${id}">${tmp}  Comments</a></li>
                    <li><i class="flaticon-history"></i>${dayjs(item.publish_date).fromNow()}</li>
                </ul>
            </div>
            <div class="blog-details-social">
                <ul class="list-wrap">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="detail-thumb text-align-center">
        <img src="${item.thumb}" alt="${item.title}" class="w-100">
    </div>
    <div>
        <p class="mt-3">${item.description}</p>
    </div>
   <div>${item.content}</div>
   <div class="blog-details-bottom">
   <div class="row align-items-center">
       <div class="col-lg-6">
           <div class="post-tags">
               <h5 class="title">Tags:</h5>
               <ul class="list-wrap">
                   <li><a href="category.html?id=${item.category.id}">${item.category.name}</a></li>
                   <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Video</a></li>
               </ul>
           </div>
       </div>
       <div class="col-lg-6">
           <div class="post-share">
               <h5 class="title">Share:</h5>
               <ul class="list-wrap">
                   <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                   <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                   <li><a href="#"><i class="fab fa-youtube"></i></a></li>
               </ul>
           </div>
       </div>
   </div>
</div>
    `;
    let htmlauthor='';
    htmlauthor+=`
        <div class="blog-avatar-img">
            <a href="#"><img src="${item.thumb}" alt="${item.title}" id="imageAuthor"></a>
        </div>
        <div class="blog-avatar-info">
            <span class="designation">Author</span>
            <h4 class="name"><a href="author.html">${item.author}</a></h4>
            <p></p>
        </div>
    `;
    authorWrapper.innerHTML=htmlauthor;
    DetailWrapper.innerHTML=html;
    breadCrumbArea.innerHTML=`<li class="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
                            <li class="breadcrumb-item" aria-current="page"><a href="category.html">${item.category.name}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">${item.title}</li>`;
});

/// SHOW COMMENT ITEMS

/*
bắt sự kiên click vào button post comment
    - lấy nội dung bình luận từ textarea
    - Tạo ra bình luận (object)
        {
            id: self.crypto.randomUUID(),
            email: email cua user đang đăng nhập,
            content,
            dateTime: thời gian hiện tại,
            articleId: id
        }
    - Thêm comment mới vào mảng COMMENTS
    - filter lại comment thuộc về bài viết đang xem -> có thể bổ sung sau
    - Hiển thị danh sách commnent 
*/

function renderComment(COMMENTS) {
    let html='';
    tmp=0;
    COMMENTS.forEach((item) => {
        if (item.articleId===id) {
            tmp++;
            html+=`<li>
                    <div class="comments-box">
                        <div class="comments-avatar">
                            <img src="assets/img/images/comment01.png" alt="img">
                        </div>
                        <div class="comments-text">
                            <div class="avatar-name gap-4">
                                <h6 class="name">${item.email}</h6>
                                <span class="date">${item.dateTime}</span>
                            </div>
                            <p>${item.content}</p>
                            <a href="#" class="reply-btn">Reply</a>
                        </div>
                    </div>
                </li>`;
        }
        listComment.innerHTML=html;
        totalComments.innerHTML=`<h3 class="comments-wrap-title" id="totalComments">${tmp} Comments</h3>`;
    });
}
// function renderCommentItem(data) {

// }
// function renderCommentChildItem(data) {

// }


///https://codeforces.com/contest/1921/problem/F