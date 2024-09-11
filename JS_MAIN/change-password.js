console.log(123);

const oldPassword=document.getElementById('oldPassword');
const newPassword=document.getElementById('newPassword');
const confirmPassword=document.getElementById('confirmPassword');
const AuthForm=document.getElementById('AuthForm');
const formMessage=document.getElementById('formMessage');

AuthForm.addEventListener('submit' ,function(event) {
    event.preventDefault();
    let oldPassVal=oldPassword.value.trim();
    let newPassVal=newPassword.value.trim();
    let confirmPassVal=confirmPassword.value.trim();
    const objPassword = {
        password_current:oldPassVal,
        password:newPassVal,
        password_confirmation:confirmPassVal
    }
    API.callWithToken().put('/auth/change-password',objPassword).then(res => {
        oldPassword.value='';
        newPassword.value='';
        confirmPassword.value='';
        toastMessage('SUCCESS-CHANGE-PASSWORD');
    }).catch(err => {
        //  const errors=err.response.data.errors;
        showErrorMessages(errors,formMessage);
        console.log(111111);
        
    });
});

