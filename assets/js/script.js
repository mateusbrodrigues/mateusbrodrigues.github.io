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

const imageMapping = {
  BeTheHero:
    "https://user-images.githubusercontent.com/37751297/78619618-26194e00-7854-11ea-8eb2-259689b7209c.png",
  Ecoleta:
    "https://github.com/mateus090/Ecoleta/raw/master/public/assets/Ecoleta-home.png",
  DM117TempleSky:
    "https://private-user-images.githubusercontent.com/37751297/337321107-a56d0e6c-cdaf-4233-8408-7637f4db59a7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjEwNzIwMTYsIm5iZiI6MTcyMTA3MTcxNiwicGF0aCI6Ii8zNzc1MTI5Ny8zMzczMjExMDctYTU2ZDBlNmMtY2RhZi00MjMzLTg0MDgtNzYzN2Y0ZGI1OWE3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzE1VDE5MjgzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY1MDZmZmNlZDMzYmEwNGExMjNhNDM2ZTkwODRlOTU4MDIzNTkzMGFlODcxOGZiOTgxMTlhNWEyNzUzYTI1NzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.NECEVTSsfDIibYcYlFPH8Sv0RDBttMeKk81qCesPWM4",
  rockethelp:
    "https://user-images.githubusercontent.com/37751297/180650406-5d11b7d6-3bd4-4b4b-882e-d0c49dbf0ba1.gif",
  CrudFlutter:
    "https://github.com/mateusbrodrigues/CrudFlutter/raw/master/flutterCRUD_Medicamentos_02.png",
  webStorage: "https://i.imgur.com/QjZyAJw.png",
};

document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projects-container");
  const reposUrl = `https://api.github.com/users/mateusbrodrigues/repos`;

  fetch(reposUrl)
    .then((response) => response.json())
    .then((repos) => {
      repos.sort((a, b) => a.name.localeCompare(b.name));

      repos.forEach((repo) => {
        const imageUrl =
          imageMapping[repo.name] ||
          "https://via.placeholder.com/300?text=No+Image";

        const projectElement = document.createElement("div");
        projectElement.className = "w-full md:w-1/3 px-4 mb-8";

        projectElement.innerHTML = `
                  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                      <a href="${imageUrl}" data-lightbox="projects" data-title="${
          repo.name
        }">
                          <img class="w-full" src="${imageUrl}" alt="${
          repo.name
        }">
                      </a>
                      <div class="p-4">
                          <h5 class="text-lg font-bold">${repo.name.replace(
                            /-/g,
                            " "
                          )}</h5>
                          <p class="text-gray-600">${
                            repo.description || "Descrição não disponível."
                          }</p>
                      </div>
                  </div>
              `;

        projectsContainer.appendChild(projectElement);
      });
    })
    .catch((error) => {
      console.error("Error loading repositories:", error);
    });
});
