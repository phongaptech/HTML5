function checkNumber(num) {
  return new Promise(function(resolve, reject) {
    if (num % 2 === 0) {
      resolve("Số " + num + " là số chẵn!");
    } else {
      reject("Lỗi: Số " + num + " là số lẻ!");
    }
  });
}

function handleCheck() {
  const input = document.getElementById("numberInput").value;
  const num = parseInt(input);
  const result = document.getElementById("result");

  result.textContent = "Đang kiểm tra...";

  checkNumber(num)
    .then(function(message) {
      result.textContent = message;
      result.style.color = "green";
    })
    .catch(function(error) {
      result.textContent = error;
      result.style.color = "red";
    })
    .finally(function() {
      console.log("Đã hoàn tất kiểm tra.");
    });
}

// function sayHello() {
//     alert("Hello");
// }

// let a = 10;
// let b = 3;
// console.log(a + b);
// console.log(a % b);
// console.log(++b);
// console.log(a ** 2);

//1. Tính tổng, hiệu, tích, chia của 2 số
// let a = 8;
// let b = 3;
// console.log("Tổng: ", a + b);
//2. So sánh 2 số
// if (a > b) {
//     console.log("a lớn hơn b");
// }
//3. Kiểm tra điều kiện vào rạp:
// let age = 17;
// let hasTicket = true;
// if (age >= 18 && hasTicket) {
//     console.log("Cho phép vào rạp");
// } else {
//     console.log("Không được vào");
// }

// Tạo 2 biến a = 10, b = 3. Tính và log ra các kết quả sau: Tổng, hiệu, tích, thương, chia lấy dư.
// let a = 10, b = 3;
// console.log("Tổng:", a + b);
// console.log("Hiệu:", a - b);
// console.log("Tích:", a * b);
// console.log("Thương:", a / b);
// console.log("Chia lấy dư:", a % b);
// So sánh a và b bằng toán tử ==, ===, !=, !==, <, >, <=, >=.
// console.log("a == b", a == b);
// console.log("a === b", a === b);
// console.log("a != b", a != b);
// console.log("a !== b", a !== b);
// console.log("a < b", a < b);
// console.log("a > b", a > b);
// console.log("a <= b", a <= b);
// console.log("a >= b", a >= b);

// Dùng for để in bảng cửu chương của số 6
// for (let j = 1; j < 10; j++) {
//     console.log("6 x", j, '=', 6 * j)
// }
// Dùng while để tính tổng các số từ 1 đến 100
// let sum = 0;
// let i = 1;
// while(i <= 100) {
//     sum += i;
//     ++i
// }
// console.log("Tổng các số từ 1 đến 100:", sum);
// Dùng do... while để yêu cầu người dùng nhập đúng mật khẩu "123456" mới cho thoát vòng lặp
// do {

// } while()

// Bài tập 1 - Viết hàm ẩn danh: Tạo một biến hello, gán cho nó một hàm ẩn danh in ra "Xin chào học viên!". Gọi hàm 2 lần
// const hello = function () {
//     console.log("Xin chào học viên!");
// }; 
// hello();
// Bài tập 2 - Viết arrow function: Viết arrow function nhanDoi(x) trả về giá trị x * 2. Viêt arrow function kiemTraChanLe(n) trả về chuỗi "Chẵn" hoặc "Lẻ"
// const nhanDoi = x => x * 2;
// console.log(nhanDoi(2));
// const kiemTraChanLe = n => {

// }

// Bài 1 - Tạo Promise đơn giản: Viết một Promise giả lập việc tải tài liệu. Sau 2 giây, resolve("Tải thành công!"). Nếu isFail = true, thì reject("Tải thất bại!")