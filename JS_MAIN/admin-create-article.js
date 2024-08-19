console.log(123);

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

AuthForm.addEventListener('submit', function(res) {
    res.preventDefault();
    // let TITLE=title.value.trim();
    // let DES=description.value.trim();
    // let CON=content.value();
    // let obj= {
    //     title :TITLE,
    //     description:DES,
    //     content:CON,
    //     thumb:
    //     category_id:
    // }
    let formData = new FormData(AuthForm);
    let obj = Object.fromEntries(formData);

    API.callWithToken().post('/articles/create',obj).then(res => {
        formMessage.innerHTML='';
        AuthForm.reset();
        toastMessage('SUCCESS POST');
    }).catch(err => {
        let errr=err.response.data.errors;
        showErrorMessages(errr,formMessage);
    });
})

