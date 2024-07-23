console.log(123123123);


const RegisterFullForm = document.getElementById('RegisterFullForm');

const GoogleMap=document.getElementById('GoogleMap');

console.log('GoogleMap',GoogleMap.innerHTML);
// ContactAdminInfo.innerHTML=
// `
//     <div class="col-xl-4 col-lg-6">
//         <div class="contact-info-item">
//             <div class="icon">
//                 <img src="assets/img/icon/contact_icon01.svg" alt="">
//             </div>
//             <div class="content">
//                 <h5 class="title">Địa điểm</h5>
//                 <p>Số 1 Đường 2 Thành phố 3</p>
//             </div>
//         </div>
//     </div>
//     <div class="col-xl-4 col-lg-6">
//         <div class="contact-info-item">
//             <div class="icon">
//                 <img src="assets/img/icon/contact_icon02.svg" alt="">
//             </div>
//             <div class="content">
//                 <h5 class="title">Email</h5>
//                 <p>Donguyenphu022008@gmail.com</p>
//             </div>
//         </div>
//     </div>
//     <div class="col-xl-4 col-lg-6">
//         <div class="contact-info-item">
//             <div class="icon">
//                 <img src="assets/img/icon/contact_icon03.svg" alt="">
//             </div>
//             <div class="content">
//                 <h5 class="title">Số điện thoại</h5>
//                 <p>0846566286</p>
//             </div>
//         </div>
//     </div>
// `;


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
        <div class="row justify-content-center d-flex">
            <div class="col-lg-6 col-md-10 align-items-stretch">
                <div class="contact-img">
                    <img src="./assets/img/login/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg"
                        alt="Hãy đăng kí tại đây" class="object-fit-contain w-100">
                </div>
            </div>
            <div class="col-lg-6 align-items-stretch">
                <div class="contact-form">
                    <h4 class="title">Hãy liên hệ với chúng tôi</h4>
                    <p>Đăng kí để cập nhật những tin tức mới nhất</p>
                    <form id="contact-form" action="assets/mail.php" method="POST">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-grp">
                                    <input type="text" name="name" placeholder="Tên">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-grp">
                                    <input type="email" name="email" placeholder="Email*">
                                </div>
                            </div>
                        </div>
                        <div class="form-grp">
                            <input type="number" name="phone" placeholder="Số điện thoại">
                        </div>
                        <div class="form-grp">
                            <textarea name="message" placeholder="Mô tả"></textarea>
                        </div>
                        <button type="submit" class="btn btn-two">Đăng kí ngay</button>
                    </form>
                    <p class="ajax-response mb-0"></p>
                </div>
            </div>
        </div>
`;

console.log('RegisterFullForm: ',RegisterFullForm.innerHTML);


GoogleMap.innerHTML= /* html */
`
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.8914518533043!2d106.67795077441353!3d20.916686380704796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7bfbc27bc233%3A0x89f213ed1023838c!2zSGFtIExvbmcgX3Ro4buLIHRy4bqlbiBuw7ppIMSRw6hvX2h1eeG7h24gdGjhu6d5IG5ndXnDqm5fdHAgaOG6o2kgcGjDsm5n!5e0!3m2!1svi!2s!4v1721462510445!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;


const checkElm=localStorage.getItem('ACCESS_TOKEN');






