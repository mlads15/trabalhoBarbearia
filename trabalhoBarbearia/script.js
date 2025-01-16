document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const menuToggle = document.getElementById("menuToggle");
    const menuList = document.getElementById("menuList");
  
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        localStorage.setItem("username", username);
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
      });
    }
  
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        menuList.style.display = menuList.style.display === "block" ? "none" : "block";
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const agendamentoForm = document.getElementById("agendamentoForm");
    const historicoContainer = document.getElementById("historicoContainer");
  
    // aqui armazean o historico

    if (agendamentoForm) {
      agendamentoForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const data = document.getElementById("data").value;
        const hora = document.getElementById("hora").value;
        const servico = document.getElementById("servico").value;
  
        const novoAgendamento = { data, hora, servico };
        let historico = JSON.parse(localStorage.getItem("historico")) || [];
        historico.push(novoAgendamento);
        localStorage.setItem("historico", JSON.stringify(historico));
  
        alert("Agendamento realizado com sucesso!");
        agendamentoForm.reset();
      });
    }
  
    // aqui carrega o historico
   
    if (historicoContainer) {
      const historico = JSON.parse(localStorage.getItem("historico")) || [];
      if (historico.length === 0) {
        historicoContainer.innerHTML = "<p>Nenhum serviço realizado ainda.</p>";
      } else {
        historicoContainer.innerHTML = historico
        .map(
            (item) =>
              `<div class="historico-item">
                <p>Data: ${item.data}</p>
                <p>Hora: ${item.hora}</p>
                <p>Serviço: ${item.servico}</p>
              </div>`
          )
          .join("");
      }
    }
  });
  
     // mds eu odeio javascript