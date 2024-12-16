const header =document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY)
    >120
})

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll=() =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}

(function(){
    emailjs.init('Gh7b1KY62n-rBxxjN');
})();

document.getElementById(addEventListener('submit',function(event){
    event.preventDefault();

    //obtener elementos
    const submitButton = this.document.getElementById('submitButton');
    const alertSuccess = this.document.getElementById('alertSuccess');
    const alertError = this.document.getElementById('alertError');

    //Deshabilitar botón y ocultar alertas
    submitButton.disabled =true;
    submitButton.textContent='Enviando...';
    alertSuccess.style.display='none';
    alertError.style.display='none';

    // Preparar plantilla de parámetros
    const templateParams = {
        from_name: this.document.getElementById('name').value,
        from_email: this.document.getElementById('email').value,
        subject: this.document.getElementById('subject').value,
        message: this.document.getElementById('message').value
    };

    emailjs.send('service_6e6osvs','template_60qcf6r', templateParams)
    .then(function(){
        alertSuccess.style.display='block';
        document.getElementById('contactFrom').reset();
    },
    function(error){
        console.error('Error',error);
        alertError.style.display='block';
    }
    .finally(function(){
        submitButton.disabled=false;
        submitButton.textContent='Enviar Mensaje';
    })
)

}))
