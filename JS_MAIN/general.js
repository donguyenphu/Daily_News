const API = {
    call: function() {
        return axios.create({
            baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
        });
    },
    callWithToken: function(token) {
        if (!token) {
            token = localStorage.getItem('ACCESS_TOKEN');
        }
        return axios.create({
            baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }, 
};

const ACCESS_TOKEN='ACCESS_TOKEN';

dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');


function showErrorMessages(errors,el) {
    let errString='';
    for (let property in errors) {
        errString+=/* html */ `<li>${errors[property]}</li>`;
        // console.log(`${property}: ${errors[property]}`);
    }
    el.innerHTML= /* html */
    `<div class="alert alert-danger" role="alert">
        <ul>${errString}</ul>
    </div>`;
}

function toastMessage(check) {
    Toastify ({
    text: `${check}`,
    duration: 3000,
    close: true,
    }).showToast();
}

