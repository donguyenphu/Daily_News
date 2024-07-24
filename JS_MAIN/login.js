API.callWithToken().get('/auth/me').then((res) => {
    window.location.href='index.html';
}).catch((err) => {
    toastMessage("THÔNG TIN ĐĂNG NHẬP KHÔNG HỢP LỆ");
});