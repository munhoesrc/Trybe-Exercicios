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

/* var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D MMM YYYY',
  onSelect: function() {
      console.log(this.getMoment().format('Do MMMM YYYY'));
  }
}); */

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});