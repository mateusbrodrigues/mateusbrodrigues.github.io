document.querySelector("form").addEventListener("submit", function (event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !message) {
    event.preventDefault();
    alert("Por favor, preencha todos os campos.");
  }
});

document.getElementById("nav-toggle").addEventListener("click", function () {
  var navContent = document.getElementById("nav-content");
  navContent.classList.toggle("hidden");
});
