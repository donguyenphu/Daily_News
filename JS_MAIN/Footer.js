class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let onlyCategoriesInner = '';
        let html = '';
        let html2 = `
                        <ul class="sub-menu" style = "padding: 0;">
                            <li><a href="category.html?id=1">Thế Giới</a></li>
                            <li><a href="category.html?id=2">Thời Sự</a></li>
                            <li><a href="category.html?id=3">Kinh Doanh</a></li>
                            <li><a href="category.html?id=4">Giải Trí</a></li>
                            <li><a href="category.html?id=5">Thể Thao</a></li>
                            <li><a href="category.html?id=6">Pháp Luật</a></li>
                            <li><a href="category.html?id=7">Giáo Dục</a></li>
                            <li><a href="category.html?id=8">Sức Khỏe</a></li>
                            <li><a href="category.html?id=9">Đời Sống</a></li>
                            <li><a href="category.html?id=10">Du Lịch</a></li>
                            <li><a href="category.html?id=11">Khoa Học</a></li>
                            <li><a href="category.html?id=12">Số Hóa</a></li>
                            <li><a href="category.html?id=13">Xe</a></li>
                        </ul>
                    `;

        let RegLog = `  <h4 class="fw-title">RegLog</h4>
                        <div class="footer-link-wrap">
                            <ul class="list-wrap">
                                <li><a href="register.html">Đăng ký</a></li>
                                <li><a href="login.html">Đăng nhập</a></li>
                            </ul>
                        </div>`;

        if (localStorage.getItem("ACCESS_TOKEN") !== null) {
            RegLog = `
                <h4 class="fw-title">Thao tác tài khoản</h4>
                <div class="footer-link-wrap">
                    <ul class="list-wrap">
                        <li><a href="profile.html" id="profile">Thông tin tài khoản</a></li>
                        <li><a href="change-password.html" id="change">Đổi mật khẩu</a></li>
                        <li><a href="admin-create-article.html" id="admin">Tạo bài viết mới</a></li>
                        <li><a href="admin-list-article.html" id="manage">Quản lí bài viết</a></li>
                        <li><a href="login.html" id="btnLogOut">Đăng xuất</a></li>
                    </ul> 
                </div>
            `;
        }


        this.innerHTML =
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
                                        <p>Trang web tin tức được cập nhật liên tục với đủ lĩnh vực: Kinh tế, thể thao, chính trị,...Hãy 
                                        đăng nhập ngay bây giờ để cập nhật những tin tức mới nhất</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-5 col-sm-6">
                                <div class="footer-widget">
                                    <h4 class="fw-title">Danh mục</h4>
                                    <div class="footer-link-wrap">
                                        <ul class="list-wrap" id = "onlyCategoriesInner">
                                            ${html + html2}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <div class="footer-widget">
                                    ${RegLog}
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


customElements.define('x-footer', Footer);