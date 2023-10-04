// Tương tác với các thẻ html thông qua id 
// document .getElementById(id).innerHTML giúp thay đổi nội dung của 1 thẻ

document.getElementById("title").innerHTML = 'Tôi tên Đông';

// document.getElementById cho phép gọi tới tất cả thuộc tính mà thẻ đang có 
var idImg = "hinhAnh";
document.getElementById(idImg).src = 'https://storage.googleapis.com/inworld-ai-usercontent-prod/2d_image/8a5ad5e6-1f9d-4333-93f7-370cf2e90fc8.jpg';

var content = document.getElementById(idImg).alt ;
console.log(content);

// Nhiệm vụ: thay đổi màu nền thẻ h1 và màu chữ 
// tạo biến lưu trữ lại câu lệnh gọi tương tác tới thẻ html
var theH1 = document.getElementById("title");
console.log(theH1);

theH1.style.backgroundColor = 'red';
// style cho màu nội dung thành màu trắng 
theH1.style.color = 'white';



document.getElementById("btnNhap").onclick = function () {
    // nơi xử lý các hành động khi người dùng click vào 
    console.log('Tôi đã bị click');
    // tương tác lấy dữ liệu từ input
    var taiKhoan = document.getElementById("taiKhoan").value;
    console.log(taiKhoan);
};

// Bài tập bật tắt đèn 
// gọi tới nút tắt đèn 
// DOM 
document.getElementById("btnTatDen").onclick = function () {
    document.getElementById("bongDen").src = "./BAT_TAT_DEN/pic_bulboff.gif";
    document.getElementById("btnBatDen").disabled = false;
    document.getElementById("btnTatDen").disabled = true;

};

// (DOM)gọi tới nút bật đèn 
document.getElementById("btnBatDen").onclick = function () {
    document.getElementById("bongDen").src = './BAT_TAT_DEN/pic_bulbon.gif';
    // cho nút bật đèn disabled true để ngăn người dùng bấm 
    document.getElementById("btnBatDen").disabled = true;
    // nút tắt đèn được sử dụng khi người dùng bấm bật đèn
    document.getElementById("btnTatDen").disabled = false;
};

// thuộc tính disabled giúp ngăn chặn người dùng click vào nút nhận vào 1 trong 2 giá trị là true hoặc false, true sẽ ngăn chặn  
// document.getElementById("btnTatDen").disabled = true; 

// alert giúp hiển thị 1 thông báo lên trình duyệt cho người dùng
// alert('Dậy đi làm thôi');
// var tenDangNhap = 'Đức';
// var password = 123456; 
// Tôi là Đức, password 123456
// nối chuỗi trong javascript 
// alert("Tôi là " + tenDangNhap + " password " + password);

document.getElementById("btnBaiTap2").onclick = function () {
    var tenDangNhap = document.getElementById("tenDangNhap").value;

    var matKhau = document.getElementById("matKhau").value;

    console.log(tenDangNhap);
    console.log(matKhau);

    alert('tài khoản: ' + tenDangNhap + ' mật khẩu ' + matKhau);
};

// tương tác với các class 
document.querySelector(".nutDangNhap .btn-dark").innerHTML = "Tôi tên Sang";

// khi gọi thuộc tính className và gán giá trị mới vào sẽ thay thế các giá trị class có sẵn ở hmtl
// document.querySelector('.demo2').className = "canhGiua";

// khi gọi thuộc tính classList.add sẽ thêm một class vào thẻ đang gọi tới 
// document.querySelector('.demo2').classList.add("canhGiua");

// khi gọi thuộc tính classList.remove sẽ xoá một class đang có ở thẻ 
// document.querySelector('.demo2').classList.remove("backgroundRed");

// bài tập đổi màu chữ 
document.querySelector("div .btn-doiMauChu").onclick = function () {
    // dom tới thẻ p 
    // dùng classList.add để thêm một class vào bên trong thẻ p 
    document.querySelector(".demo2").classList.add("mauChuTrang");

}

// lấy dữ liệu từ select 

document.querySelector("#btnLayDuLieu").onclick = function (){
    var duLieu = document.getElementById("LayDuLieu").value;
    console.log(duLieu);
}

// demo tạo html bằng javascript
document.getElementById("btnTaoHtml").onclick = function () {
    //hành động khi người dùng click
    var theImg = document.createElement("img");
    theImg.src = "https://i.pinimg.com/736x/94/af/0e/94af0e09f18d20d6804959e14f089aef.jpg";
    console.log(theImg);
    
    // gọi tới className sẽ giúp ghi nội dung mới vào bên trong className thay thế các class đang có

    theImg.className = ""
    document.querySelector(".imgContent").appendChild(theImg);
    // document.querySelector(".imgContent").innerHTML = "<img src = 'https://i.pinimg.com/736x/94/af/0e/94af0e09f18d20d6804959e14f089aef.jpg' />";

}