console.log(123);

API.callWithToken().get('/auth/me').then((res) => {

}).catch((err) => {
    window.location.href='index.html';
});

ClassicEditor.create(document.querySelector('#content')).catch((error) => {
    console.log(error);
});

const queryString=window.location.search;
const urlParams = new URLSearchParams(queryString);
const id=urlParams.get('id');

const thumb=document.getElementById('thumb');
const title=document.getElementById('title');
const createArticle=document.getElementById('createArticle');
const description=document.getElementById('description');
const content=document.getElementById('content');
const categoryId=document.getElementById('category_id');
const thumbPreview=document.getElementById('thumbPreview');
const AuthForm=document.getElementById('AuthForm');
const formMessage=document.getElementById('formMessage');

let editor;

ClassicEditor.create(document.querySelector('#content')).then(newEditor => {
    editor=newEditor;
}).catch((error) => {
    console.log('ERRORS');
});



createArticle.addEventListener('click', function() {
    API.call().get('https://api.unsplash.com/photos/random?client_id=AHiUgCs8fnituwR76TO7o0HRNABLlHP-N0pV50xEFC8&orientation=landscape').then(res => {
        let urll=res.data.urls.regular;
        thumb.value=urll;
        if (thumb.value) thumbPreview.src=thumb.value;
    });
});


thumb.addEventListener('change', function() {
    if (thumb.value) {
        thumbPreview.src=thumb.value;
    }
});

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

AuthForm.addEventListener('submit', function (res) {
    res.preventDefault();
    let formData = new FormData(AuthForm);
    let data = Object.fromEntries(formData);
    API.callWithToken().put(`/articles/${id}`,data).then((res2) => {
        toastMessage('SUCCESS');
        window.location.href='admin-list-article.html';
    }).catch(err => {
        console.log('CANT UPDATE');
    })
});



