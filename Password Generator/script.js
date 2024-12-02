
function Genpass() {
  let chars = "0123456789";
  var password = "";
  let passwordlen = op.length.options[op.length.options.selectedIndex].value;
  let upper = document.getElementById('include-uppercase');
  let lower = document.getElementById('include-lowercase');
  let character = document.getElementById('include-special-chars');

  if(upper.checked == true){
    chars = chars+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(lower.checked == true){
    chars = chars+"abcdefghijklmnopqrstuvwxyz";
  }
  if(character.checked == true){
    chars = chars+"@#%$&";
  }

  for (var i = 0; i <= passwordlen; i++) {
    var random = Math.floor(Math.random() * chars.length + 1);
    password += chars.charAt(random);
  }
  document.getElementById("dis").value = password;
}

function cop() {
  // copy the password
  const copyText = document.getElementById("dis").value;

  navigator.clipboard.writeText(copyText);
  alert("The Password has been copyed...");
}
