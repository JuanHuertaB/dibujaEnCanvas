
var area = document.getElementById("area_de_dibujo");
var papel = area.getContext("2d");
var estado;

document.addEventListener("mousemove",dibujarTrayecto);
document.addEventListener("mousedown",clickDown);
document.addEventListener("mouseup",clickUp);
document.addEventListener("keyup", cambioColor);

var colorcito = "red";
var xi,yi,xf,yf;

function cambioColor(evento)
{
  if(evento.keyCode == 97 || evento.keyCode == 49 )
  {
      colorcito = "blue";

  }if(evento.keyCode == 98 || evento.keyCode == 50 )
  {
  colorcito = "green";

  }if(evento.keyCode == 99 || evento.keyCode == 51 )
  {
      colorcito = "red";

  }if(evento.keyCode == 101 || evento.keyCode == 53 )
  {
      colorcito = "white";
  }
}

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2.5;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea(colorcito,0,0,300,0,papel);
dibujarLinea(colorcito,0,0,0,300,papel);
dibujarLinea(colorcito,300,0,300,300,papel);
dibujarLinea(colorcito,0,300,300,300,papel);

function clickUp (arriba)
{
  estado = 0;

  xf = arriba.offsetX;
  xy = arriba.offsetY;
}

function clickDown (abajo)
{
  estado = 1;
  xi = abajo.offsetX;
  yi = abajo.offsetY;
}

function dibujarTrayecto(evento)
{
    if (estado == 1)
    {
      dibujarLinea(colorcito,xi,yi,evento.offsetX,evento.offsetY,papel);
      xi = evento.offsetX;
      yi = evento.offsetY;
    }
}
