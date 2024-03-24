let data = JSON.parse(localStorage.getItem("data")) || [];
let keyInput = document.querySelector("#key");
let searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => updateCard(keyInput.value));

function updateCard(id) {
  let youFind = data.find((item) => item.hasOwnProperty(id));
  console.log(youFind);

  if (youFind) {
    alert("loged In");
    youFind = youFind[id];
    for (const key in youFind) {
      document.getElementById(key).textContent = youFind[key];
    }
  } else {
    let confirmed = confirm("you not found in dataBase sign in first");
    if (confirmed) {
      var obj = {
        firstName: "",
        lastName: "",
        country: "",
        phoneNumber: "",
        state: "",
        city: "",
        village: "",
      };

      for (const e in obj) {
        userInput = prompt(`Enter ${e}:`);

        if (userInput) {
          obj[e] = userInput;
          document.getElementById(e).textContent = userInput;
        }
      }
    }
    let key = keyInput.value;
    data.push({ [key]: obj });
    localStorage.setItem("data", JSON.stringify(data));
    keyInput.value = "";
  }
}
document
  .getElementById("profile-picture")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(file);
  });

// Event listener for upload button click
document.querySelector(".upload-btn").addEventListener("click", function () {
  document.getElementById("profile-picture").click();
});
