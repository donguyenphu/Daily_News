
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML=
        /* html */
        `
           <header class="header-style-three">
            <div id="header-fixed-height"></div>
            <div class="header-top-wrap-two">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                            <div class="header-top-left">
                                <div class="offcanvas-toggle">
                                    <a href="javascript:void(0)" class="menu-tigger-two">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                                <div class="header-top-social">
                                    <ul class="list-wrap">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="header-top-right">
                                <div class="header-search-wrap header-search-wrap-two">
                                    <form action="#" id="searchForm">
                                        <input type="text" placeholder="Search here . . ." id="inpSearch">
                                        <button type="submit"><i class="flaticon-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" class="menu-area menu-style-three">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="menu-wrap">
                                <nav class="menu-nav">
                                    <div class="logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
                                    </div>
                                    <div class="logo d-none">
                                        <a href="index.html"><img src="assets/img/logo/w_logo.png" alt=""></a>
                                    </div>
                                    <div class="navbar-wrap main-menu d-none d-lg-flex" style="flex: 2">
                                        <ul class="navigation gap-9" id="menuFull">
                                    
                                        </ul>
                                    </div>
                                    <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                                </nav>
                            </div>  

                            <div class="mobile-menu">
                                <nav class="menu-box">
                                    <div class="close-btn"><i class="fas fa-times"></i></div>
                                    <div class="nav-logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="Logo"></a>
                                    </div>
                                    <div class="nav-logo d-none">
                                        <a href="index.html"><img src="assets/img/logo/w_logo.png" alt="Logo"></a>
                                    </div>
                                    <div class="mobile-search">
                                        <form action="#">
                                            <input type="text" placeholder="Search here...">
                                            <button><i class="flaticon-search"></i></button>
                                        </form>
                                    </div>
                                    <div class="menu-outer">
                                    </div>
                                    <div class="social-links">
                                        <ul class="clearfix list-wrap">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div class="menu-backdrop"></div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="offCanvas-wrap">
                <div class="offCanvas-body">
                    <div class="offCanvas-toggle">
                        <span></span>
                        <span></span>
                    </div>
                    <div class="offCanvas-content">
                        <div class="offCanvas-logo logo">
                            <a href="index.html" class="logo-dark"><img src="assets/img/logo/logo.png" alt="Logo"></a>
                            <a href="index.html" class="logo-light"><img src="assets/img/logo/w_logo.png" alt="Logo"></a>
                        </div>
                        <p>The argument in favor of using filler text goes something like this: If you use any real content in the Consulting Process anytime you reach.</p>
                        <ul class="offCanvas-instagram list-wrap">
                            <li><a href="assets/img/blog/hr_post01.jpg" class="popup-image"><img src="assets/img/blog/hr_post01.jpg" alt="img"></a></li>
                            <li><a href="assets/img/blog/hr_post02.jpg" class="popup-image"><img src="assets/img/blog/hr_post02.jpg" alt="img"></a></li>
                            <li><a href="assets/img/blog/hr_post03.jpg" class="popup-image"><img src="assets/img/blog/hr_post03.jpg" alt="img"></a></li>
                            <li><a href="assets/img/blog/hr_post04.jpg" class="popup-image"><img src="assets/img/blog/hr_post04.jpg" alt="img"></a></li>
                            <li><a href="assets/img/blog/hr_post05.jpg" class="popup-image"><img src="assets/img/blog/hr_post05.jpg" alt="img"></a></li>
                            <li><a href="assets/img/blog/hr_post06.jpg" class="popup-image"><img src="assets/img/blog/hr_post06.jpg" alt="img"></a></li>
                        </ul>
                    </div>
                    <div class="offCanvas-contact">
                        <h4 class="title">Get In Touch</h4>
                        <ul class="offCanvas-contact-list list-wrap">
                            <li><i class="fas fa-envelope-open"></i><a href="mailto:info@webmail.com">info@webmail.com</a></li>
                            <li><i class="fas fa-phone"></i><a href="tel:88899988877">888 999 888 77</a></li>
                            <li><i class="fas fa-map-marker-alt"></i> 12/A, New Booston, NYC</li>
                        </ul>
                        <ul class="offCanvas-social list-wrap">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="offCanvas-overlay"></div>
        </header>
        `;
    }
}

customElements.define('x-header',Header);