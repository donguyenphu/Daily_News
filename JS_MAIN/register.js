console.log(123123123);


const RegisterFullForm = document.getElementById('RegisterFullForm');

const GoogleMap=document.getElementById('GoogleMap');

console.log('GoogleMap',GoogleMap.innerHTML);


RegisterFullForm.innerHTML =
    /* html */
    `   
        <div class="contact-info-wrap">
            <div class="row justify-content-center" id="ContactAdminInfo">
                <div class="col-xl-4 col-lg-6">
                    <div class="contact-info-item">
                        <div class="icon">
                            <img src="assets/img/icon/contact_icon01.svg" alt="">
                        </div>
                        <div class="content">
                            <h5 class="title">Địa điểm</h5>
                            <p>Số 1 Đường 2 Thành phố 3</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6">
                    <div class="contact-info-item">
                        <div class="icon">
                            <img src="assets/img/icon/contact_icon02.svg" alt="">
                        </div>
                        <div class="content">
                            <h5 class="title">Email</h5>
                            <p>Donguyenphu022008@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6">
                    <div class="contact-info-item">
                        <div class="icon">
                            <img src="assets/img/icon/contact_icon03.svg" alt="">
                        </div>
                        <div class="content">
                            <h5 class="title">Số điện thoại</h5>
                            <p>0846566286</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;
GoogleMap.innerHTML= /* html */
`
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.8914518533043!2d106.67795077441353!3d20.916686380704796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7bfbc27bc233%3A0x89f213ed1023838c!2zSGFtIExvbmcgX3Ro4buLIHRy4bqlbiBuw7ppIMSRw6hvX2h1eeG7h24gdGjhu6d5IG5ndXnDqm5fdHAgaOG6o2kgcGjDsm5n!5e0!3m2!1svi!2s!4v1721462510445!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;

/**
 * name
 * email
 * password
 * phone
 * address
 */


// camelCase -> kieu lac da
// yourName
// myAge

const token = localStorage.getItem('ACCESS_TOKEN');
const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const address=document.getElementById('address');
// PascalCase
let AuthForm=document.getElementById('AuthForm');
let RegisterWrapper=document.getElementById('RegisterWrapper');
const formMessage=document.getElementById('formMessage');

// Python -> snake_case
// your_name
// my_age

// let elInputName = document.getElementById('inputName');
// let elInputEmail = document.getElementById('inputEmail');
// let elInputPassword = document.getElementById('inputPassword');




// console.log('NOW:',RegisterWrapper.innerHTML);

/**
 * name
 * email
 * password
 * phone
 * address
 */


AuthForm.addEventListener('submit', function(event) { /// no errors
    event.preventDefault();
    
    // ngăn các hành động mặc định của phần tử html, ví dụ thẻ form sẽ có hành động submit, thẻ a sẽ có hành động chuyển hướng, ...
    // ngăn chặn hành động mặc định của form là submit dữ liệu lên server theo url ở thuộc tính action
    const data = {
        name: name.value,
        email:email.value,
        password:password.value,
        phone:phone.value,
        address:address.value
    }   
    API.call().post('users/register',data).then(function(ress) {
        const Log={
            email:data.email,
            password:data.password
        }  
        API.call().post('auth/login',Log).then(function(ress) {
            localStorage.removeItem(ACCESS_TOKEN);
            localStorage.setItem(ACCESS_TOKEN,ress.data.access_token);
            window.location.href='index.html';
        });
    }).catch(function(err) {
        toastMessage('DANG KY KHONG THANH CONG');
        const errors=err.response.data.errors;
        showErrorMessages(errors,formMessage);
    });
});








