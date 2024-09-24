function submit() {
    let username = document.getElementById("usr").value;
    let password = document.getElementById("pword").value;

    if (username == "admin" && password == "admin123") {
      document.getElementById("result").innerHTML = "Logging in...";
    } else {
      document.getElementById("result").innerHTML = "Incorrect. Try Again.";
    }
  }