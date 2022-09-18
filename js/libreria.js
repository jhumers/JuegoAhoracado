String.prototype.replaceAt = function (index, character) {
    return this.substring(0, index) + character + this.substring(index + character.length);
}
//palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

//BANCO DE PALABRAS
const palabras=['POLLO','PERRO','GATO','OVEJA','VAGA']

//SELECCION ALEATORIA DE PALABRAS
const palabra=palabras[Math.floor(Math.random()*palabras.length)]
console.log(palabra);

//SUSTITUCION DE CARATERES A "_"
let palabraGuion=palabra.replace(/./g,"_ ");
let NumFallos=0;
//alert(palabra + " - " +palabraGuion);

//alert(palabra+" - "+palabraGuion)
//FUNSION PARA REFRESCAR LA PAGINA
function actualizar(){location.reload(true);}
//Función para actualizar cada 4 segundos(4000 milisegundos)
  //setInterval("actualizar()",4000);

//MOSTRAMOS LOS CARACTERES RESPLAZADO POR "_"
document.querySelector('#sol').innerHTML=palabraGuion;

//EVENTO CLICL
document.querySelector('#calcular').addEventListener('click',()=>{
    //VEALUAMOS EL CARACTER INGRESADO
    const letra=document.querySelector('#rpt').value;
    //alert(letra);
    
    let falla=true;
    //alert(palabra)
    //RECOREMOS LA PALABRA PARA VERIFICAR SI EL CARACTER EXISTE EN LA PALABRA
    for(const i in palabra){
        if(letra==palabra[i]){
            //alert("exito")
            //SI LA EL CARACTER EXISTE ES REMPLAZADO REMPLAZA AL "_"
            palabraGuion= palabraGuion.replaceAt(i*2, letra);
            falla=false;
        }
    }
    

if(falla){
    //SE INCIA  A CONTAR EL NUMERO DE INTENTOS
    NumFallos++;
    var a=5;
    var b=a-NumFallos;
    //MUESTRA EL NUMERO DE INTENTOS QUE QUEDAN
    document.querySelector('#res').innerHTML=b;
    //MUESTRA IMAGEN POR CADA ERROR 
    document.querySelector('#imagen').style.
    backgroundPosition=-(310*NumFallos)+'px 0';
    //VERIFICA QUE EL NUMERO DE INTENTOS ESTE DENTRO DEL LIMITE
    if(NumFallos==5){
        //alert("perdiste")
        //SI PIERDE MUESTRA MODAL CON MENSAJE DE PERDIDA
        var has2="PERDISTE!!!! XD";
        document.querySelector('#has').innerHTML=has2;
        document.querySelector('#modalV').style.display='block';
    }

    }else{
        //VERIFICA QUELA PALABRA SEA CORRECTA
        if(palabraGuion.indexOf('_')<0){
          // document.querySelector('#modalV').style.visibility='visible';
         //document.getElementById('modalV').modal('show')  
           //document.getElementById('modalV')[0].style.visibility="visible";
       // document.querySelector('#modalV').style.display='block';
       
       //MUESTRA  MODAL DE MENSAJE DE GANADOR
       var has="GANASTE!!!! XD";
       document.querySelector('#has').innerHTML=has;
       document.querySelector('#modalV').style.display='block';
        }
       
    }
    //PINTA CADA "_" SUSTITUIDO POR UN  CARACTER CORRECTO
    document.querySelector('#sol').innerHTML=palabraGuion;
    //MUESTRA EL FOCUS CADA VER QUE DAMOS CLICK
    document.querySelector('#rpt').value='';
    document.querySelector('#rpt').focus();
})
