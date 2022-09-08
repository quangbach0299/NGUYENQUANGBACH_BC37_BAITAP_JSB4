/*
input: b là số ngày làm việc 
process: Lấy số ngày làm việc nhân với tiền lương 1 ngày b * 100.000
result: c là tổng tiền lương nhận được 

*/

function calcMoney() {
  var payment = document.getElementById("tienLuong1h").value;
  console.log(payment);
  var time = document.getElementById("soGioLam").value;
  console.log(time);
  var total = payment * time;

  total.toLocaleString();

  document.getElementById("tongLuong").innerHTML = total;
}

function medium() {
  var a = +document.getElementById("a").value;
  console.log(a);
  var b = +document.getElementById("b").value;
  var c = +document.getElementById("c").value;
  var d = +document.getElementById("d").value;
  var e = +document.getElementById("e").value;

  var medium = (a + b + c + d + e) / 5;
  console.log(medium);
  document.getElementById("giaTriTrungBinh").innerHTML = medium;
}

function changMoney() {
  var money = +document.getElementById("money").value;
  console.log(a);
  var exchangRate = +document.getElementById("exchangRate").value;

  var result = money * exchangRate;

  document.getElementById("thanhTien").innerHTML = result;
}

function rectangle() {
  var long = +document.getElementById("long").value;
  var wide = +document.getElementById("wide").value;

  var perimeter = (long + wide) * 2;
  var area = long * wide;

  document.getElementById("perimeter").value = perimeter;

  document.getElementById("area").value = area;
}

function analysis() {
  var number = +document.getElementById("number").value;
  if (number < 9 || number > 99) {
    document.getElementById("final").innerHTML = "Số nhập vào không hợp lệ";
  } else {
    var n1 = number % 10;
    var n2 = Math.floor(number / 10);
    var result = n1 + n2;
    document.getElementById("final").innerHTML = result;
  }
}
