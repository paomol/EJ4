var d=1;
var f=5;
var k=0;
us1="pepito20";
co1="contra1";
us2="alejomora1";
co2="contra2";
us3="maria34";
co3="contra3";
us4="laura123";
co4="contra4";
us5="edgar80";
co5="contra5";
let contador = 1;
let g=2;

function Clic(){
    let us = document.getElementById("Usuario").value; 
    let co = document.getElementById("Contraseña").value; 
    campo = document.getElementById('men1');
    valido = document.getElementById('men2'),
    regex = "";
    if (((us===us1)&&(co===co1)) || ((us===us2)&&(co===co2)) || ((us===us3)&&(co===co3)) || ((us===us4)&&(co===co4)) || ((us===us5)&&(co===co5))){
        campo.innerHTML = " ";
        valido.innerHTML = "Usuario y contraseña correctos";
            setTimeout("alert('ALARMA APAGADA')", 100);
    } 
    else {
        campo.innerHTML = "Intentos disponibles: " + g;
        valido.innerHTML = "Usuario o contraseña incorrectos";
            
        if(contador === 3){
            document.getElementById('validar').disabled = 'true';
            setTimeout("alert('AlARMA ACTIVADA, ESPERE 30 SEGUNDOS')", 100);
            setTimeout("alert('VUELVA A INTENTAR')", 29000);
            setTimeout(uu, 30000); 
        }
        contador++;
        g--;
    }
}

function uu(){
    location.reload();
}
