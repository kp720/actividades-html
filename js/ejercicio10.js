function convertirTemperatura() {
      const celsiusInput = document.getElementById('celsius');
      const fahrenheitInput = document.getElementById('fahrenheit');
      const errorMsg = document.getElementById('errorMsg');

      const valor = celsiusInput.value.trim();

      errorMsg.textContent = '';
      fahrenheitInput.value = '';

      if (valor === '') {
        errorMsg.textContent = 'Por favor, ingresa un valor en grados Celsius.';
        celsiusInput.focus();
        return;
      }

      const celsius = Number(valor);
      if (isNaN(celsius)) {
        errorMsg.textContent = 'El valor ingresado no es un número válido.';
        celsiusInput.focus();
        return;
      }

      const fahrenheit = (celsius * 9 / 5) + 32;

      fahrenheitInput.value = Number(fahrenheit.toFixed(2)) + '°F';
    }

    document.getElementById('celsius').addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        convertirTemperatura();
      }
    });