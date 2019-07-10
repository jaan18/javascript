let mes;
switch (new Date().getMonth()) {
  case 0:
    mes = "Enero";
    break;
  case 1:
    mes = "Febrero";
    break;
  case 3:
    mes = "Marzo";
    break;
  case 4:
    mes = "Abril";
    break;
  case 5:
    mes = "Mayo";
    break;
  case 6:
    mes = "Junio";
    break;
  case 7:
    mes = "Julio";
    break;
  case 8:
    mes = "Agosto";
    break;
  case 9:
    mes = "Septiembre";
    break;
  case 10:
    mes = "Noviembre";
    break;
  case 11:
    mes = "Diciembre";
    break;

  default:
    console.log("Mes invalido");
    break;
}

console.log(`Este mes es ${mes}`);
