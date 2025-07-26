
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
                <div class="container"  style = "margin-right: 0;">
                    <div class="row me-0">
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
                                    
                                </nav>
                            </div>
                            <div class="menu-backdrop"></div>

                        </div>
                    </div>
                </div>
            </div>

            
            <div class="offCanvas-overlay"></div>
        </header>
        `;
    }
}

customElements.define('x-header',Header);