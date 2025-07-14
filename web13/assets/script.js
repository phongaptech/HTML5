// Cho mảng số: [1, 2, 3, 4, 5]
// Yêu cầu:
// - In ra các số chẵn
// - Tạo mảng mới gấp đôi các số
// - Tính tổng của tất cả các số
// const numbers = [1, 2, 3, 4, 5];
// const even = numbers.filter(n => n % 2 === 0);
// console.log(even);
// const doubled = numbers.map(n => n * 2);
// console.log(doubled);
// const sum = numbers.reduce((total, num) => total + num, 0);
// // console.log(sum);

// Bài 1:
// - Tạo object book với các thuộc tính: title, author, pages.
// - In ra tiêu đề sách và tên tác giả
// let book = {
//     title: 'The Third Reich',
//     author: 'Austrian painter',
//     pages: 2000
// };
// console.log(book.title);
// console.log(book.author)
// Bài 2:
// - Tạo object student gồm: name, scores (object con chứa: Math, english).
// - In ra điểm tiếng Anh của student
// let student = {
//     name: 'Nguyễn Văn A',
//     scores: {
//         math: 8,
//         english: 5
//     }
// };
// console.log(student.scores.english);

// Tạo object student có thuộc tính lồng: info.name, info.age, grades.math, grades.english.
// - Truy cập điểm math
// - Sửa tên học sinh
// - Thêm address vào info
// let student = {
//     info: {
//         name: 'Trần Văn B',
//         age: 16
//     },
//     scores: {
//         math: 7,
//         english: 6
//     }
// };
// console.log(student.scores.math);
// console.log(student.info.name);
// student.info.name = 'Bùi Doãn C';
// console.log(student.info.name);
// student.info.addres = 'Hà Nội';
// console.log(student.info.addres);

// Tạo mảng students với các object {name, score}.
// Yêu cầu:
// - Tìm học sinh điểm cao nhất
// - Lọc học sinh đỗ (score >= 5)
// - Kiểm tra xem có học sinh nào điểm dưới 3 không
const students = [
    {
        name: 'Nguyễn Văn A',
        score: 5
    },
    {
        name: 'Trần Văn A',
        score: 9
    },
    {
        name: 'Dương Văn A',
        score: 2
    }
];
let max = students[0].score;
// console.log(max);
for(let i = 0; i < students.length; i++) {
    // console.log(students[i]);
    if(students[i].score>max)
    {
        max = students[i].score;
    }
}

console.log(max);
// Dùng forEach