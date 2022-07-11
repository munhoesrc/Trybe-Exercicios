const submitButton = document.querySelector("#submit-button");
submitButton.onclick = (e) => {
  // e.preventDefault();
  validationButton();
};
function validationButton() {
  
  // Validar nome
  const fullNameInput = document.querySelector("#full-name");
  if (fullNameInput.value.length < 10 || fullNameInput.value.length > 40) {
    alert("Dados inválidos.");
    return;
  }

  // Validar email
  const emailInput = document.querySelector("#email");
  if (emailInput.value.length < 10 || emailInput.value.length > 50) {
    alert("Dados inválidos.");
    return;
  }
  alert(
    "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
  );
}
