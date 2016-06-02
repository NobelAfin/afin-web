
document.formulario.addEventListener('submit', validarFormulario);

function validarFormulario(evObject) {

      evObject.preventDefault();//Evita el envio del formulario hasta comprobar

      var nom=document.getElementById('telefono').value;

      if (nom=="") {
      	alert("Nombre esta vacio");
      }else if(nom=="Enrique"){
      	alert("Tu nombre es: "+nom);
      	alert("Bienvenido creador");
      }


}


function validarNombre(n){
	if (n=="") {
		alert("Nombre esta vacio");
	}else{
		alert("Tu nombre es: "+n)
	}
}


var dias = new Array();

var dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo","mi dia"];

dis.sort();
for (var i = 0 <dias.length; i ++) {
	
alert(dias[7]);
}

