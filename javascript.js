function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}
var textElement = document.getElementById("toggleText");
    var originalText = textElement.textContent;
    var isToggled = false;
    function toggleText() {
        if (isToggled) {
            textElement.textContent = originalText;
        } else {
            textElement.textContent = "Genuine Cloud Web Facilitating the facilitating bundles we offer are all sent in a split second on our SSD fueled cloud. We don't utilize committed servers that work on single bits of equipment. Our whole foundation is worked to be solid, secure, and adaptable.";
        }
        isToggled = !isToggled;
    }
    textElement.addEventListener("click", toggleText);
function areyouwilling(){
  alert("Thanks for Creating Account !");
}
function choosetheplan() {
  alert("Here the best plan!");
}