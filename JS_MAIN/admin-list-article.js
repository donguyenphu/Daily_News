console.log(123);

API.callWithToken().get('/auth/me').then((res) => {
    
}).catch((err) => {
    window.location.href='index.html';
})

const article=document.getElementById('article');


API.callWithToken().get('/articles/my-articles').then((res) => {
    let html='';
    const articles=res.data.data;
    articles.forEach((item) => {
        const checked = item.status === '1' ? 'checked' : '';
        html+=`
            <tr>
                <td>${item.id}</td>

                <td><img src="${item.thumb}" alt="${item.title}" width="150px"/></td>

                <td>${item.title}</td>

                <td>${renderSlb(item.category.id, item.id)}</td>

                <td><input type="checkbox" class="form-check-input chk-sat" data-id="${item.id}" ${checked}/></td>
                
                <td>
                    <a href="detail.html?id=${item.id}" class="btn btn-info">View</a>
                    <a href="admin-update-article.html?id=${item.id}" class="btn btn-warning">Edit</a>
                    <button class="btn btn-danger delete-article"  data-id="${item.id}">Delete</button>
                </td>
            </tr>
        `;
        article.innerHTML=html;
    });
}); 

article.addEventListener('click', function(ev) {
    const el=ev.target;
    if (el.classList.contains('delete-article')) {
        API.callWithToken().delete(`/articles/${el.dataset.id}`).then((res) => {
            toastMessage('SUCCESS DELETE');
        })
    }
});

article.addEventListener('change', function(ev) {
    const el=ev.target;
    if (el.classList.contains('category')) {
        const check=el.value;
        API.callWithToken().patch(`/articles/${el.dataset.id}`,{category_id : check}).then((res) => {
            toastMessage('UPDATE CATEGORY SUCCESS');
        });
    }
    if (el.classList.contains('chk-sat')) {
        const check=(el.checked ? 1 : 0);
        API.callWithToken().patch(`/articles/${el.dataset.id}`,{status : check}).then((res) => {
            toastMessage('UPDATE STATUS SUCCESS');
        });
    }
});

function renderSlb(Id,articleId) {
    const categories = [
        { id: 1, name: 'Thế Giới' },
        { id: 2, name: 'Thời Sự' },
        { id: 3, name: 'Kinh Doanh' },
        { id: 5, name: 'Giải Trí' },
        { id: 6, name: 'Thể Thao' },
        { id: 7, name: 'Pháp Luật' },
        { id: 8, name: 'Giáo Dục' },
        { id: 9, name: 'Sức Khỏe' },
        { id: 10, name: 'Đời Sống' },
        { id: 11, name: 'Du Lịch' },
        { id: 12, name: 'Khoa Học' },
        { id: 13, name: 'Số Hóa' },
        { id: 14, name: 'Xe' },
    ];
    let html='';
    categories.forEach((item) => {
        let selected=(item.id==Id ? 'selected' : '');
        html+=`<option value="${item.id}" ${selected}>${item.name}</option>`;
    });
    return `<select class="category" data-id="${articleId}">${html}</select>`;
}   

