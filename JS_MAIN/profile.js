
const email=document.getElementById('email');
const Name=document.getElementById('name');
const AuthForm=document.getElementById('AuthForm');
const phone=document.getElementById('phone');
const address=document.getElementById('address')
const formMessage=document.getElementById('formMessage');
let queryProfile=document.querySelector('title');
API.callWithToken().get('/auth/me').then(res => {
    const data=res.data.data;
    email.value=data.email;
    Name.value=data.name;
    phone.value=data.phone;
    address.value=data.address;
    queryProfile.innerHTML=`Thông tin tài khoản của ${data.name}`;
}).catch(err => {
    window.location.href='index.html';
});

AuthForm.addEventListener('submit', function(res) {
    res.preventDefault();
    const formDat=new FormData(AuthForm);
    const data=Object.fromEntries(formDat);

    API.callWithToken().put('/auth/update',data).then((res) => {
        toastMessage('SUCCESS UPDATE');
    }).catch(err => {
        const errors=err.response.data.errors;
        showErrorMessages(errors,formMessage);
    });
});
