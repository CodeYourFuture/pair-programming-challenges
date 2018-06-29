var buttons = document.getElementsByTagName('button');
var images = document.getElementsByTagName('img');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event){
    event.target.disabled = true
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('show')
    }

    var target = event.target.innerText
    var activeImage = document.querySelectorAll("[data-id='"+target+"']")[0]
    activeImage.classList.add('show')
  })
}
