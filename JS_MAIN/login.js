API.callWithToken().get('auth/me').then((res) => {
    window.location.href='index.html';
});

const NewsletterWrapper=document.getElementById('NewsletterWrapper');   

const email=document.getElementById('email');
const password=document.getElementById('password');
const formMessage=document.getElementById('formMessage');
const GoogleMap=document.getElementById('GoogleMap');

console.log(NewsletterWrapper.innerHTML);

GoogleMap.innerHTML= /* html */
`
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.8914518533043!2d106.67795077441353!3d20.916686380704796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7bfbc27bc233%3A0x89f213ed1023838c!2zSGFtIExvbmcgX3Ro4buLIHRy4bqlbiBuw7ppIMSRw6hvX2h1eeG7h24gdGjhu6d5IG5ndXnDqm5fdHAgaOG6o2kgcGjDsm5n!5e0!3m2!1svi!2s!4v1721462510445!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;
const AuthForm=document.getElementById('AuthForm');

AuthForm.addEventListener('submit', function (res) {
    res.preventDefault();

    let vale=email.value.trim();
    let valp=password.value.trim();
    console.log('email:',vale);
    console.log('pass:',valp);
    
    const dataLog={
        email:vale,
        password:valp
    }

    API.call().post('auth/login',dataLog)
      .then(function(res) {
        localStorage.setItem('ACCESS_TOKEN',res.data.access_token);
        window.location.href='index.html';
    })
    .catch(function(err) {
        // toastMessage('THONG TIN DANG NHAP KHONG HOP LE');
        formMessage.innerHTML=`<div class="alert alert-danger" role="alert">THONG TIN KHONG HOP LE!</div>`;
        // const errors=err.response.data.errors;
        // showErrorMessages(errors,formMessage);
        email.value='';
        password.value='';
    });
});