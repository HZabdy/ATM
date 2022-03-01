var disponibleATM = [];
var billeteImagen = [];
billeteImagen[20] = "20pesotes.jpg";
billeteImagen[50] = "50pesotes.jpg";
billeteImagen[100] = "100pesotes.jpg";
billeteImagen[200] = "200pesotes.jpg";
billeteImagen[500] = "500pesotes.jpg";

agregarBilletes(10, 500);   //0
agregarBilletes(10, 200);  //1
agregarBilletes(10, 100);  //2
agregarBilletes(10, 50);   //3
agregarBilletes(10, 20);   //4

var r = document.getElementById("resultado");
var b = document.getElementById("boton");
b.addEventListener("click", entregarDinero);

var retirable = [];

