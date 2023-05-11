function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  const BMI = weight / Math.pow(height * 0.01, 2);

  let healthStatus;

  // if (BMI <= 18.5) {
  //   healthStatus = "Underweight";
  // } else if (BMI > 18.5 && BMI <= 24.9) {
  //   healthStatus = "Healthy Weight";
  // } else if (BMI > 25 && BMI <= 29.9) {
  //   healthStatus = "Overweight";
  // } else if (BMI >= 30) {
  //   healthStatus = "Obesity";
  // }

  if (age >= 19 && age <= 24) {
    if (BMI >= 19 && BMI <= 24) {
      healthStatus = "healthy";
    } else {
      healthStatus = "not healthy";
    }
  } else if (age >= 25 && age <= 34) {
    if (BMI >= 20 && BMI <= 25) {
      healthStatus = "healthy";
    } else {
      healthStatus = "not healthy";
    }
  } else if (age >= 35 && age <= 44) {
    if (BMI >= 21 && BMI <= 26) {
      healthStatus = "healthy";
    } else {
      healthStatus = "not healthy";
    }
  } else if (age >= 45 && age <= 54) {
    if (BMI >= 22 && BMI <= 27) {
      healthStatus = "healthy";
    } else {
      healthStatus = "not healthy";
    }
  } else if (age >= 55 && age <= 64) {
    if (BMI >= 23 && BMI <= 28) {
      healthStatus = "healthy";
    } else {
      healthStatus = "not healthy";
    }
  } else if (age > 65) {
    if (BMI >= 24 && BMI <= 29) {
      healthStatus = "healthy";
    } else {
      healthStatus = "not healthy";
    }
  }

  alert(`your BMI is ${BMI} and is considered ${healthStatus}`);
}
