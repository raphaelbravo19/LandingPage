function Aplicar () {
	var elemento = document.getElementById("nombre")
	var elemento2 = document.getElementById("result")

	if (elemento.value != "") {
		var tokengen= generate_token(12)
        $.ajax({
            url: "https://vast-meadow-24979.herokuapp.com/organizations",
            type: "POST",
            data: {
                name: elemento.value,
                token: tokengen
            }
        }).done(function(data){
            data = JSON.parse(data);
            console.log(data);
        })
        elemento2.className="col-xl-9 mx-auto"
        elemento2.style.backgroundColor = "rgba(0,0,0,0.5)"
        elemento2.style.paddingTop = "50px"
        elemento2.innerHTML =` <h2 class="mb-5">TOKEN: `+tokengen+`</h2>`
        }
}
function generate_token(length){
    //edit the token allowed characters
    var a = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    var b = [];  
    for (var i=0; i<length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}
