console.log(123);

API.callWithToken().get('/auth/me').then((res) => {

}).catch((err) => {
    window.location.href='index.html';
});

ClassicEditor.create(document.querySelector('#content')).catch((error) => {
    console.log(error);
});


const thumb=document.getElementById('thumb');
const title=document.getElementById('title');
const createArticle=document.getElementById('createArticle');
const description=document.getElementById('description');
const content=document.getElementById('content');
const categoryId=document.getElementById('category_id');
const thumbPreview=document.getElementById('thumbPreview');
const AuthForm=document.getElementById('AuthForm');
const formMessage=document.getElementById('formMessage');

createArticle.addEventListener('click', function() {
    API.call().get('https://api.unsplash.com/photos/random?client_id=AHiUgCs8fnituwR76TO7o0HRNABLlHP-N0pV50xEFC8&orientation=landscape').then(res => {
        let url=res.data.urls.regular;
        thumb.value=url;
        thumbPreview.src=thumb.value;
    });
});
thumb.addEventListener('change', function() {
    if (thumb.value) {
        thumbPreview.src=thumb.value;
    }
});