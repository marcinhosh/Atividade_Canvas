// Instancia o canvas
var canvas = document.getElementById('canvas1');

// Instancia o pincel
var pincel = canvas.getContext('2d');

pincel.beginPath();
   pincel.moveTo(50, 100);
   pincel.lineTo(50, 300);
   pincel.lineTo(300, 300);
   pincel.fill();
pincel.closePath();

pincel.beginPath();
   pincel.moveTo(300, 300);
   pincel.lineTo(300, 300, 400, 100);
   pincel.lineTo(300, 300, 400, 100);
   // pincel.lineTo(300, 300);
   // pincel.lineTo(300, 300);
   // pincel.lineTo(400, 200);
   pincel.stroke();
 pincel.closePath();
