function Aplicar () {
	var elemento = document.getElementById("nombre")
	var elemento2 = document.getElementById("email")
    var elemento3 = document.getElementById("result")
	if (elemento.value != "" && elemento2.value != "") {
		//var tokengen= generate_token(12)
        $.ajax({
            url: "http://srv-desa.eastus2.cloudapp.azure.com/appbetterride/api/v1/organizations",
            type: "POST",
           
            data: {
                name: elemento.value,
                email: elemento2.value
            }
        }).done(function(data){
            data = JSON.parse(data);
            console.log(data);
        })
        elemento3.className="col-xl-9 mx-auto"
        elemento3.style.backgroundColor = "rgba(0,0,0,0.5)"
        elemento3.style.paddingTop = "50px"
        elemento3.innerHTML =` <h2 class="mb-5">Se envio el token de registro a su correo</h2>`
        }
}
