console.log(123);

API.callWithToken().get('/auth/me').then((res) => {

}).catch((err) => {
    window.location.href='index.html';
});


const queryString=window.location.search;
const urlParams = new URLSearchParams(queryString);
let id=urlParams.get('id');

const thumb=document.getElementById('thumb');
const title=document.getElementById('title');
const createArticle=document.getElementById('createArticle');
const description=document.getElementById('description');
const content=document.getElementById('content');
const categoryId=document.getElementById('category_id');
const thumbPreview=document.getElementById('thumbPreview');
const AuthForm=document.getElementById('AuthForm');
const formMessage=document.getElementById('formMessage');

API.call().get(`articles/${id}`).then(function(res) {
    const item=res.data.data;
    console.log(item);
    title.value=item.title;
    description.value=item.description;
    thumb.value=item.thumb;
    thumbPreview.src=item.thumb;
    categoryId.value=item.category_id;
    editor.setData(item.content);
    // editor.setData(item.description);
});

let editor;

ClassicEditor.create(document.querySelector('#content')).then(newEditor => {
    editor=newEditor;
}).catch((error) => {
    console.log('ERRORS');
});

createArticle.addEventListener('click', function() {
    API.call().get('https://api.unsplash.com/photos/random?client_id=AHiUgCs8fnituwR76TO7o0HRNABLlHP-N0pV50xEFC8&orientation=landscape').then(res => {
        toastMessage('RANDOM ANH THANH CONG');
        const urll=res.data.urls.regular;
        thumb.value=urll;
        thumbPreview.src=urll;
    });
});


thumb.addEventListener('change', function() {
    if (thumb.value) {
        thumbPreview.src=thumb.value;
    }
});


AuthForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let formData = new FormData(AuthForm);
    let datac = Object.fromEntries(formData);
    API.callWithToken().put(`/articles/${id}`,datac).then(res2 => {
        console.log(123);
        
        toastMessage('SUCCESS');
        // window.location.href='admin-list-article.html';
    }).catch(err => {
        console.log('CANT UPDATE');
    })
});


/**
 * cái lỗi như thế này
 * khi mình random
 * ảnh sẽ xuất hiện
 * trc khi xhien, sẽ xảy ra sự kiện submit
 * trong khi button random không đặt submit???
 * thì hệ thống tự lưu ảnh cũ vào rồi về list
 */



