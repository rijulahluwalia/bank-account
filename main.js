let balance = 0;

function depositAmountToBalance() {
  let amount = window.prompt("Enter a valid amount to deposit:");
  var isnum = /^\d+$/.test(amount);
  if (isnum) {
    amount = parseInt(amount);
    if (amount > 0) {
      balance += amount;
      document.getElementById("balance").innerHTML = "$" + balance;
    } else {
      alert("You can't withdraw a negative balance!");
    }
  } else {
    alert("Please enter only numbers.");
  }
}

function withdrawAmountFromBalance() {
  let amount = window.prompt("Enter a valid amount to withdraw:");
  var isnum = /^\d+$/.test(amount);
  if (isnum) {
    amount = parseInt(amount);

    // Check to see if amount to withdraw is less than balance
    if (amount > balance) {
      alert("You don't have enough funds to make the withdrawal!");
    } else {
      if (amount > 0) {
        balance -= amount;
        document.getElementById("balance").innerHTML = "$" + balance;
      } else {
        alert("You can't withdraw a negative balance!");
      }
    }
  } else {
    alert("Please enter only numbers.");
  }
}
