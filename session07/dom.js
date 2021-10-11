//tương tác thông qua id
function clickForm() {
    let frm = document.getElementById('frm-login');
    frm.style.backgroundColor = 'green';

    //tương tác thông qua thuộc tính class
    let frmClass = document.getElementsByClassName('form-group');
    frmClass[0].style.backgroundColor = 'yellow';
    //tương tác thông qua tên thẻ html 
    let tagH = document.getElementsByTagName('h1');
    tagH[0].innerHTML = 'Đăng nhập hệ thống';
    //tương tác theo cú pháp css selector\
    let query = document.querySelectorAll('form .form-group label');
    for (i = 0; i < query.length; i++) {
        query[i].style.color = 'red';
    }
}
function checkForm() {
    //kiểm tra user not null 
    let check = true;
    let user = document.getElementById('user').value;
    if (user.trim() == "") {
        document.getElementById('err-user').innerHTML = "bạn chưa nhập dữ liệu"
        check = false;
    } else {
        document.getElementById('err-user').innerHTML = ' ok';
        document.getElementById('err-user').style.color = 'green';

    }
    return check;
}