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




const checkElm=localStorage.getItem('ACCESS_TOKEN');
const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const address=document.getElementById('address');
let AuthForm=document.getElementById('AuthForm');
let RegisterWrapper=document.getElementById('RegisterWrapper');
const formMessage=document.getElementById('formMessage');


RegisterWrapper.innerHTML+=`
        <div id="formMessage"></div>
        <h4 class="title">Điền thông tin ngay</h4>
        <p>Đăng kí ngay bây giờ</p>
        <form id="contact-form" action="assets/mail.php" method="POST" id="AuthForm">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-grp">
                        <input type="text" name="name" placeholder="Tên*" id="name" required>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-grp">
                        <input type="email" name="email" placeholder="Email*" id="email" required>
                    </div>
                </div>
            </div>
            <div class="form-grp">
                <input type="text" name="password" placeholder="Mật khẩu*" id="password" required>
            </div>
            <div class="form-grp">
                <input type="number" name="phone" placeholder="Số điện thoại*" id="phone" required>
            </div>
            <div class="form-grp">
                <textarea name="address" placeholder="Địa chỉ*" id="address"></textarea>
            </div>
            <button type="submit" class="btn btn-two">Đăng kí</button>
        </form>
        <p class="ajax-response mb-0"></p>
`;


// console.log('NOW:',RegisterWrapper.innerHTML);

/**
 * name
 * email
 * password
 * phone
 * address
 */

AuthForm.addEventListener('submit', function(res) { /// no errors
    res.preventDefault();
    const data ={
        name:Name,
        email:Email,
        password:Pass,
        phone:Phone,
        address:Address
    }
    API.call().post('users/register',data).then(function(res) {
        const Log={
            email:data.email,
            password:data.Pass
        }
        // localStorage.setItem(checkElm,Log);
        API.call().post('auth/login',Log).then(function(ress) {
            window.location.href='index.html';
        });
    }).catch(function(err) {
        const errors=err.response.data.errors;
        showErrorMessages(errors,formMessage);
    });
});







