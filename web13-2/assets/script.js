const students = [
    { id: 1, name: 'An', age: 16, gender: 'Nam', scores: [7, 8, 9] },
    { id: 2, name: 'Bình', age: 17, gender: 'Nam', scores: [6, 6, 5] },
    { id: 3, name: 'Cúc', age: 16, gender: 'Nữ', scores: [9, 9, 10] },
    { id: 4, name: 'Dương', age: 18, gender: 'Nữ', scores: [4, 5, 6] },
    { id: 5, name: 'E', age: 15, gender: 'Nam', scores: [10, 10, 10] }
];
console.log("1. Tên và tuổi:");
students.forEach(function (student) {
    console.log("Tên: " + student.name + ", Tuổi: " + student.age);
});
const studentsWithAvg = students.map(function (student) {
    const sum = student.scores.reduce(function (a, b) {
        return a + b;
    }, 0);
    const avg = sum / student.scores.length;
    return { name: student.name, average: avg };
});
console.log("2. Mảng mới gồm tên và điểm trung bình:");
console.log(studentsWithAvg);
const goodStudents = studentsWithAvg.filter(function (student) {
    return student.average >= 8;
});
console.log("3. Học sinh có điểm TB >= 8:");
console.log(goodStudents);
const firstOlderStudent = students.find(function (student) {
    return student.age >= 17;
});
console.log("4. Học sinh đầu tiên có tuổi >= 17:");
console.log(firstOlderStudent);
const hasLowScore = studentsWithAvg.some(function (student) {
    return student.average < 5;
});
console.log("5. Có học sinh điểm TB < 5 không?");
console.log(hasLowScore);
const allOlderThan15 = students.every(function (student) {
    return student.age >= 15;
});
console.log("6. Tất cả học sinh có tuổi >= 15?");
console.log(allOlderThan15);
const totalAvg = studentsWithAvg.reduce(function (total, student) {
    return total + student.average;
}, 0) / students.length;
console.log("7. Điểm trung bình toàn lớp:");
console.log(totalAvg.toFixed(2));