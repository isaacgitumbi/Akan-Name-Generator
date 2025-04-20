document.getElementById("akanForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
  
    const resultDiv = document.getElementById("akanName");
  
    if (!dob) {
      resultDiv.textContent = "Please enter your date of birth.";
      return;
    }
  
    if (!gender) {
      resultDiv.textContent = "Please select your gender.";
      return;
    }
  
    const date = new Date(dob);
    const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
  
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const akanName = gender.value === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  
    resultDiv.textContent = `You were born on a ${dayNames[dayOfWeek]}. Your Akan name is ${akanName}.`;
  });
