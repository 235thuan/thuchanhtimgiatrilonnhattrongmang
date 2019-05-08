function giatrilonnhattrongmang() {
    let x = [2,3,4,1,2,25,5,6,7,3,43,3,23,23,5,264,534,3,43,34,34,3,4315636,3,5353,2,4,4,3,43,4,343,535]; // đặt mảng bất kỳ
    let max = x[0]; // giá trị lớn nhất là phần tử đầu tiên của mảng cừa khởi tạo
    for (let i = 0; i < x.length; i++) {
        if (max < x[i]) {
            max = x[i];
        }
    }
    document.write(max);
}