const textHello = document.getElementById("hello");
const textIam = document.getElementById("iam");
const textName = document.getElementById("name");

textHello.onmouseover = function () {
  textHello.innerHTML = "Works";
};
textHello.onmouseout = function () {
  textHello.innerHTML = "Hello.";
};
textHello.onclick = function(){
  location.href = "work.html";
};



textIam.onmouseover = function () {
  textIam.innerHTML = "Contact";
};
textIam.onmouseout = function () {
  textIam.innerHTML = "I am";
};
textIam.onclick = function(){
  location.href = "contact.html";
};


textName.onmouseover = function () {
    textName.innerHTML = "About&nbsp;Abhi";
  };
  textName.onmouseout = function () {
    textName.innerHTML = "Abhinandan";
  };

  textName.onclick = function(){
    location.href = "about.html";
  };


  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }