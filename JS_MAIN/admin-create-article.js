const thumb=document.getElementById('thumb');
const title=document.getElementById('title');
const createArticle=document.getElementById('createArticle');
const description=document.getElementById('description');
const content=document.getElementById('content');
const categoryId=document.getElementById('category_id');
const thumbPreview=document.getElementById('thumbPreview');
const AuthForm=document.getElementById('AuthForm');
const formMessage=document.getElementById('formMessage');
const randomThumb=document.getElementById('randomThumb');
let editor;


queryAdminCreate='Tạo bài viết';

ClassicEditor.create(document.querySelector('#content')).then(newEditor => {
    editor=newEditor;
}).catch((error) => {
});

createArticle.addEventListener('click', function() {
    thumbPreview.src='';
    API.call().get('https://api.unsplash.com/photos/random?client_id=AHiUgCs8fnituwR76TO7o0HRNABLlHP-N0pV50xEFC8&orientation=landscape').then(res => {
        let url=res.data.urls.regular;
        thumb.value=url;
        if (thumb.value) thumbPreview.src=thumb.value;
    });
});


thumb.addEventListener('change', function() {
    if (thumb.value) {
        thumbPreview.src=thumb.value;
    }
});

AuthForm.addEventListener('submit', function(res) {
    res.preventDefault();
    let formData = new FormData(AuthForm);
    let obj = Object.fromEntries(formData);

    API.callWithToken().post('/articles/create',obj).then(res => {
        formMessage.innerHTML='';
        AuthForm.reset();
        toastMessage('SUCCESS POST');
        thumb.value='';
        thumbPreview.src='./assets/img/images/about_img02.jpg';
        title.value=description.value=content.value='';
        categoryId.value='Chọn danh mục';
    }).catch(err => {
        thumb.value='';
        thumbPreview.src='./assets/img/images/about_img02.jpg';
        title.value=description.value=content.value='';
        categoryId.value='Chọn danh mục';
        let errr=err.response.data.errors;
    });
})

