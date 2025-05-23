function loguear(){
    let user = document.getElementById("user").value;
    var contra = document.getElementById("contra").value;

    if(user == "obed" && contra == "2106"){
        window.location.href = "bienvenida.html";
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}