console.log(123);

const article=document.getElementById('article');


API.callWithToken().get('/articles/my-articles').then((res) => {
    let html='';
    const articles=res.data.data;
    articles.forEach((item) => {
        const checked = item.status === '1' ? 'checked' : '';
        html+=`
            <tr>
                <td>${item.id}</td>
                <td>
                    <img
                        src="${item.thumb}"
                        alt=""
                        width="150px"
                    />
                </td>
                <td>${item.title}</td>
                <td>
                    ${renderSlb(item.category.id, item.id)}
                </td>
                <td><input type="checkbox" class="form-check-input chk-sat" data-id="${item.id}" ${checked}/></td>
                <td>
                    <a href="detail.html?id=${item.id}" class="btn btn-info">View</a>
                    <a href="admin-update-article.html?id=${item.id}" class="btn btn-warning">Edit</a>
                    <button class="btn btn-danger delete-article"  data-id="${item.id}">Delete</button>
                </td>
            </tr>
        `;
        
    });
    article.innerHTML=html;
}); 