const WrapperNewsletter=document.getElementById('WrapperNewsletter');

WrapperNewsletter.innerHTML=
`
    <div class="sidebar-newsletter" id="WrapperNewsletter">
        <div class="icon"><i class="flaticon-envelope"></i></div>
        <h4 class="title">TRANG TIN TỨC HIỆN ĐẠI</h4>
        <p>Đăng kí để nhận thông báo mới nhất</p>
        <div class="sidebar-newsletter-form-two">
            <form action="#">
                <div class="form-grp">
                    <button type="submit" class="btn" href="login.html">Đăng nhập ngay</button>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="checkbox">
                    <label for="checkbox">Lưu thông tin cá nhân</label>
                </div>
            </form>
        </div>
    </div>
`;
