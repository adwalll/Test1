function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    alert("Login successful");
    document.getElementById("login-section").style.display = "none";
    document.getElementById("upload-section").style.display = "block";
    document.getElementById("reward-info").style.display = "block";
  } else {
    alert("Please enter email and password");
  }
}

function upload() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const description = document.getElementById("description").value;
  const contact = document.getElementById("contact").value;

  if (name && age && description && contact) {
    alert("Details uploaded successfully. It will be shared with nearby users.");
    // You can now integrate backend storage or localStorage if needed
  } else {
    alert("Please fill all fields");
  }
}
