// var ten = "tuan";
// let age = 21 ;
// const gender = "male";
// document.writeln(ten); 
// document.writeln(age);
// document.writeln(gender); 
// alert(ten);

// alert ("Chào mừng các bạn đến với js");

// //confrim
// let check = confirm("bạn có muốn xóa không?"); // chỉ trả về giá trị true hoặc false
// console.log(check);

//prompt 
// let names = prompt ("Tên của bạn là gì ?");
// document.write(names);
// let a = 17;
// let b = 8;
// let c = a + b ;
// let d = a*b;
// let e = a/b
// let g = a%b;
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(g);
// let a = 1;
// let b = "1";
// // console.log(a === b);
// let c = a==b?true:false;    
// console.log(c); // nếu biểu thức trước dấu ? mà đúng thì trả về kết quả sau dấu ? và sai trả về sau dấu :
// console.log(typeof a); // trả về kiểu dữ liệu       

// let age = prompt ("Nhập số tuổi của bạn ?");
// let gender = prompt ("Nhập giới tính")
// if (age >=18 && "Male"){ // nếu dk trong mệnh đề đúng thì thực thi khối lệnh
//     alert("ok");
// }

// if (age >=18) {
//     alert ("ok");
//nếu đk trong mệnh đề đúng trả về ok sai trả về bạn chưa đủ tuổi
// } else {
//     alert("Bạn chưa đủ tuổi .");
// }
//tính nghiệm của pt bậc 2 
//cho người dùng nhập vào a , b ,c 
// let a = prompt("Nhập a:");
// let b = prompt("Nhập b:");
// let c = prompt("Nhập c");
// let denta = b * b - 4 * a * c;
// if (denta < 0) {
//     alert("Phương trình vô nghiệm");
// } else if (denta == 0) {
//     alert("Phương trình có nghiệm duy nhất:"+ - b / (2 * a));
// } else {
//     alert("Phương trình có hai nghiệm phân biệt:"+ (-b - Math.sqrt(denta)) / (2 * a) + "và" + (-b + Math.sqrt(denta)) / (2 * a));
// }
// let n = prompt ("Nhập một số :");
// for(i=1 ; i<=n ;i++){
//     flag = true //giả định i là số nguyên tố 
// }

//vòng lặp while 
// let a = 10;
// // while (a > 0) { // kiểm tra điều kiện trước đúng thì thực thi sai thì kết thúc
// //     console.log(a);
// //     a--;
// // }
// let b = 2;
// do {
//     console.log(b); // chạy trước mới check điều kiện , đúng chạy tiếp sai dừng lại
//     a--;
// }while (b<3);


// mảng 
// let arr = ["abc", 1 , "abc", 2 , "abc" , 3];
// console.log(arr[0]);
//object 
// let obj = [
//     {
//         name: "Tuấn",
//         age : 18,
//         address : "Hà Nội"
//     }
// ]
// let list_obj = [
//     {
//         name: "Tuấn",
//         age : 18,
//         address : "Hà Nội"
//     },
//     {
//         name: "Linh",
//         age : 18,
//         address : "Hà Nội"
//     },
//     {
//         name: "Nam",
//         age : 18,
//         address : "Hà Nội"
//     },
//     {
//         name: "Hùng",
//         age : 18,
//         address : "Hà Nội"
//     },
//     {
//         name: "Minh",
//         age : 18,
//         address : "Hà Nội"
//     }
// ]
// console.log(list_obj);

// for ( i in list_obj) {
//     let str = list_obj[i].name + " - " + list_obj[i].age + "-" + list_obj[i].address + "<br>";
//     document.writeln(str);
// }

// list_obj.forEach(function (item , index) { 
//     debugger
//     let str = item.name + " - " + item.age + "-" + item.address + "<br>";
//     document.writeln(str);
//  })


// let arr = [1, 2,4,7,8,9];
// let arr2 = [5,7,9];
// // arr.push("tuan"); // thêm vào mảng
// // arr.pop(); // xóa pt cuối cùng của mảng 
// // arr.shift(); //xóa pt đầu của mảng
// let new_arr = arr.slice(2,4);
// console.log(new_arr);

// if (5>3) {
//  document.write("ok1");
//  if (4>2) {
//     document.write("ok");
// }
// }

// let a= 2;
// switch (a) {
//     case 1:
//         alert("ok");
//         break;
//         case "2":
//         alert("ok2");
//         break;
//         case 3:
//         alert("ok3");
//         break;
//         default: 
//         alert("false");
//         break;
// }
let arr = ["anh","tu","nguyet","minh"] 
let arr2 = ["abc","def"]
 arr = arr.concat(arr2);
 console.log(arr);
 var arr3 = [1,3,4,10,9,5]
 arr.sort();
 console.log(arr3);
    
