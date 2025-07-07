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
