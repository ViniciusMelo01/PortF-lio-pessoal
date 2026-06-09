var lamp = document.getElementById("lamp");
var int = false

lamp.addEventListener("click", function(){
    if(int == false) {
        lamp.src="assets/lamp_on.png"
        lamp.alt="Lâmpada acesa"
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)"
        int = true
    } else {
        lamp.src="assets/lamp_off.png"
        lamp.alt="Lâmpada apagada"
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)"
        int = false
       }
})
