String.prototype.replaceAt = function (index, character) {
    return this.substring(0, index) + character + this.substring(index + character.length);
}
//palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

//palabras de prueba
const palabras=['CASA','PERRO','gato']

const palabra=palabras[Math.floor(Math.random()*palabras.length)]
console.log(palabra);


let palabraGuion=palabra.replace(/./g,"_ ");
let NumFallos=0;
//alert(palabra + " - " +palabraGuion);

//alert(palabra+" - "+palabraGuion)
function actualizar(){location.reload(true);}
//Función para actualizar cada 4 segundos(4000 milisegundos)
  //setInterval("actualizar()",4000);


document.querySelector('#sol').innerHTML=palabraGuion;

document.querySelector('#calcular').addEventListener('click',()=>{
    const letra=document.querySelector('#rpt').value;
    //alert(letra);
    
    let falla=true;
    //alert(palabra)

    for(const i in palabra){
        if(letra==palabra[i]){
            //alert("exito")
            palabraGuion= palabraGuion.replaceAt(i*2, letra);

            falla=false;
        }
    }
    

if(falla){
    NumFallos++;
    var a=5;
    var b=a-NumFallos;
    document.querySelector('#res').innerHTML=b;
    document.querySelector('#imagen').style.
    backgroundPosition=-(310*NumFallos)+'px 0';
    if(NumFallos==5){
        //alert("perdiste")
        var has2="PERDISTE!!!! XD";
        document.querySelector('#has').innerHTML=has2;
        document.querySelector('#modalV').style.display='block';
    }

    }else{
        if(palabraGuion.indexOf('_')<0){
          // document.querySelector('#modalV').style.visibility='visible';
         //document.getElementById('modalV').modal('show')  
           //document.getElementById('modalV')[0].style.visibility="visible";
       // document.querySelector('#modalV').style.display='block';
       var has="GANASTE!!!! XD";
       document.querySelector('#has').innerHTML=has;
       document.querySelector('#modalV').style.display='block';
        }
       
    }
    document.querySelector('#sol').innerHTML=palabraGuion;
    document.querySelector('#rpt').value='';
    document.querySelector('#rpt').focus();
})
