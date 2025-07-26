
const menuFull = document.getElementById('menuFull');

API.call().get('categories_news').then(function (res) {
    const articles = res.data.data;
    let html = '';
    let html2 = `<li class="menu-item-has-children"><a href="#">Danh mục khác</a>
                    <ul class="sub-menu">`;
    articles.forEach((item, index) => {
        if (index < 3) {
            html +=/* html */`<li><a href="category.html?id=${item.id}">${item.name}</a></li>`;
        }
        else {/* html */html2 += `<li><a href="category.html?id=${item.id}">${item.name}</a></li>`;
        }
    });
    html2 += `</ul>
        </li>`;
    menuFull.innerHTML = html + html2;


    API.callWithToken().get('/auth/me').then((resMe) => {
        let nameDisplay = resMe.data.data.name;
        menuFull.innerHTML +=
            /* html */
            `<li class="menu-item-has-children">
                <a href="#">
                    <span>${nameDisplay}</span><i class="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul class="sub-menu">
                    <li><a href="profile.html" id="profile">Thông tin tài khoản</a></li>
                    <li><a href="change-password.html" id="change">Đổi mật khẩu</a></li>
                    <li><a href="admin-create-article.html" id="admin">Tạo bài viết mới</a></li>
                    <li><a href="admin-list-article.html" id="manage">Quản lí bài viết</a></li>
                    <li><a href="login.html" id="btnLogOut">Đăng xuất</a></li>
                </ul> 
            </li>`;
    }).catch((err) => {
        menuFull.innerHTML += /* html */
            `<li class="menu-item-has-children">
            <a href="#">
                RegLog
            </a>
            <ul class="sub-menu">
                <li><a href="login.html" id="btnLogIn">Đăng nhập</a></li>
                <li><a href="register.html" id="btnReg">Đăng ký</a></li>
            </ul>
        </li>`;
    });
    preloader();
});

menuFull.addEventListener('click', function (s) {

    let el = s.target;
    if (el.id === 'btnLogOut') {
        localStorage.removeItem(ACCESS_TOKEN);
        window.location.href = 'index.html';
    }
    else if (el.id === 'btnLogIn') {
        localStorage.removeItem(ACCESS_TOKEN);
        window.location.href = 'login.html';
    }
    else if (el.id === 'btnReg') {
        window.location.href = 'register.html';
    }
    else if (el.id === 'change') {
        window.location.href = 'change-password.html';
    }
    else if (el.id === 'admin') {
        window.location.href = 'admin-create-article.html';
    }
    else if (el.id === 'manage') {
        window.location.href = 'admin-list-article.html';
    }
    else if (el.id === 'profile') {
        window.location.href = 'profile.html';
    }
    else if (el.id === 'update') {
        window.location.href = 'admin-update-article.html';
    }
});