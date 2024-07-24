class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML=
        /* html */
        `
        <footer>
            <div class="footer-area">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-7">
                                <div class="footer-widget">
                                    <div class="fw-logo">
                                        <a href="index.html"><img src="assets/img/logo/w_logo.png" alt=""></a>
                                    </div>
                                    <div class="footer-content">
                                        <p>Trang web tin tức với đủ lĩnh vực: Kinh tế, thể thao, chính trị,...Hãy 
                                        đăng nhập ngay bây giờ để cập nhật những tin tức mới nhất</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-5 col-sm-6">
                                <div class="footer-widget">
                                    <h4 class="fw-title">Company</h4>
                                    <div class="footer-link-wrap">
                                        <ul class="list-wrap">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="contact.html">The Test Kitchen</a></li>
                                            <li><a href="contact.html">Podcast</a></li>
                                            <li><a href="contact.html">Events</a></li>
                                            <li><a href="contact.html">Jobs</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="footer-widget">
                                    <h4 class="fw-title">Get Help</h4>
                                    <div class="footer-link-wrap">
                                        <ul class="list-wrap">
                                            <li><a href="contact.html">Contact & Faq</a></li>
                                            <li><a href="contact.html">Oders & Returns</a></li>
                                            <li><a href="contact.html">Gift Cards</a></li>
                                            <li><a href="contact.html">Register</a></li>
                                            <li><a href="contact.html">Catalog</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <div class="footer-widget">
                                    <h4 class="fw-title">Explore</h4>
                                    <div class="footer-link-wrap">
                                        <ul class="list-wrap">
                                            <li><a href="contact.html">The Shop</a></li>
                                            <li><a href="contact.html">Recipes</a></li>
                                            <li><a href="contact.html">Food</a></li>
                                            <li><a href="contact.html">Travel</a></li>
                                            <li><a href="contact.html">Hotline</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <div class="footer-widget">
                                    <h4 class="fw-title">Follow us On</h4>
                                    <div class="footer-link-wrap">
                                        <ul class="list-wrap">
                                            <li><a href="https://www.facebook.com/bestofsuy/">facebook</a></li>
                                            <li><a href="https://www.facebook.com/bestofsuy/">Twitter</a></li>
                                            <li><a href="https://www.facebook.com/bestofsuy/">Instagram</a></li>
                                            <li><a href="https://www.facebook.com/bestofsuy/">Youtube</a></li>
                                            <li><a href="https://www.facebook.com/bestofsuy/">Pinterest</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}


{/* <div class="footer-bottom">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="footer-bottom-menu">
                    <ul class="list-wrap">
                        <li><a href="contact.html">Chính sách và điều khoản</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6">
                <div class="copyright-text">
                    <p>© 2023 All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
</div> */}

customElements.define('x-footer',Footer);