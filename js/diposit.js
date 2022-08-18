document.getElementById("btn-diposit").addEventListener("click", function () {
  // deposite part
  const dipositField = document.getElementById("diposit-field");
  const newDipositAmountString = dipositField.value;
  const newDipositAmount = parseFloat(newDipositAmountString);

  const totalAmountElement = document.getElementById("diposit-total");
  const previousTotalAmountString = totalAmountElement.innerText;
  const previousTotalAmount = parseFloat(previousTotalAmountString);

  const currentTotalAmount = previousTotalAmount + newDipositAmount;
  totalAmountElement.innerText = currentTotalAmount;

  // Account part (adding deposite in Account part)
  const accountTotalElement = document.getElementById("account-total");
  const previousAccountTotalString = accountTotalElement.innerText;
  const previousAccountTotal = parseFloat(previousAccountTotalString);

  const currentAccountTotal = previousAccountTotal + newDipositAmount;
  accountTotalElement.innerText = currentAccountTotal;
});

