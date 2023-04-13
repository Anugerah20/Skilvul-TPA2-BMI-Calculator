function checkNum(num) {
     return num == 0 ? false : true;
}

function checkYourBMI() {
     const weightInput = document.getElementById('weight').value;
     const heightInput = document.getElementById('height').value;

     // Input check cannot be empty
     if (weightInput === '' || heightInput === '' || weightInput == 0 || heightInput == 0) {
          Toastify({
               text: "Weight and Height must be filled in, cannot be zero or minus",
               duration: 3000,
               newWindow: false,
               close: true,
               gravity: "top",
               position: "center",
               stopOnFocus: true,
               style: {
                    background: "red",
               }
          }).showToast();
          return;
     }

     if (checkNum(weightInput) && checkNum(heightInput)) {
          const bmi = (weightInput / Math.pow(heightInput / 100, 2)).toFixed(1);
          let categories;
          if (bmi < 18.5) {
               categories = 'Underweight';
          } else if (bmi >= 18.5 && bmi < 25) {
               categories = 'Normal Weight';
          } else if (bmi >= 25 && bmi < 30) {
               categories = 'Overweight';
          } else {
               categories = 'Obesity ';
          }

          document.getElementById('show').innerHTML = "Your BMI is <b>" + bmi + "</b> which means you are <b>" + categories + "</b>";
     }
}

function resetBMI() {
     document.getElementById('weight').value = '';
     document.getElementById('height').value = '';
     document.getElementById('show').innerHTML = '';
}