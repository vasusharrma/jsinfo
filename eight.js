let whoIsThere = prompt("who is there ");

if (whoIsThere === "Admin") {
  let password = prompt("Enter your password");
  if (password === "The Master") {
    alert("Welcome");
  }
  else if (password == "") {
    alert("Cancelled");
  }
  else {
    alert("Wrong Person")
  }
}

else if (whoIsThere === "") {
  alert("Cancelled");
}

else {
  alert("I don't know you")
}
