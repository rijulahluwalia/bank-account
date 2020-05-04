let balance = 0;
function depositAmountToBalance() {
  let depositAmount = parseInt(
    window.prompt("Enter a valid amount to deposit:")
  );

  if (Number.isInteger(depositAmount)) {
    if (depositAmount < 0) {
      alert("Error Try again");
    } else {
      balance = parseInt(balance + depositAmount);
      alert("Success");
      document.getElementById("balance").innerHTML = "$" + balance;
    }
  } else {
    alert("Error Try again");
  }
}

function withdrawAmountFromBalance() {
  let withdrawAmount = parseInt(
    window.prompt("Enter a valid amount to withdraw:")
  );
  if (Number.isInteger(withdrawAmount)) {
    if (balance - withdrawAmount < 0) {
      alert("Error Try again");
    } else if (withdrawAmount > 0) {
      balance = parseInt(balance - withdrawAmount);
      alert("Success");
      document.getElementById("balance").innerHTML = "$" + balance;
    } else {
      alert("Error Try again");
    }
  } else {
    alert("Error Try again");
  }
}
