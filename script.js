const cashInput = document.getElementById("cash");
const change = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const cidList = document.getElementById("cid");
const total = document.getElementById("total");

let price = 376;
let cash = parseFloat(cashInput.value);
let cid = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];
let totalCID = 0;

const currency = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

const displayReg = (cidArr) => {
  total.textContent = `Total: $${price.toFixed(2)}`;
  for (let i = 0; i < cidArr.length; i++) {
    let currency = cidArr[i][0];
    let amount = cidArr[i][1];
    cidList.innerHTML += `<li>${currency}: $${amount.toFixed(2)}</li>`;
    totalCID += amount;
  }
};

displayReg(cid);

const calculateChange = (price, cash, cid) => {
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  let changeDue = cash - price;

  if (totalCID < changeDue) {
    change.textContent = "status: INSUFFICIENT_FUNDS";
  } else {
  }
};
