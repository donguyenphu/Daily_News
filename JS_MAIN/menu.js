
const menuFull=document.getElementById('menuFull');

API.call().get('categories_news').then(function(res) {
    const articles=res.data.data;
    let html='';
    let html2=`<li class="menu-item-has-children"><a href="#">Danh mục khác</a>
                    <ul class="sub-menu">`;
    articles.forEach((item,index) => {
       if (index < 3) {
            html+=
            /* html */
            `<li><a href="category.html?id=${item.id}">${item.name}</a></li>`;
        }
        else {
            /* html */
            html2+=`<li><a href="category.html?id=${item.id}">${item.name}</a></li>`
        }
    });
    html2+=`</ul>
        </li>`;
    menuFull.innerHTML=html+html2;
    /// sao nó ko mở đc hả thầy
    preloader();
});
