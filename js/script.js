//Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// CALCULATION

////////////////////////////////////////////////////////////////////////////////
// SELECTORS
//INPUTS
const bill = document.querySelector(".bill-input");
const tip = document.querySelector(".percentage-input");
const splitCheckbox = document.querySelector(".split-bill");
const splitAmong = document.querySelector(".people-input");
const tipResultContainer = document.querySelector(".tip-calculated-container");
const totalResultContainer = document.querySelector(
  ".total-calculated-container"
);
const tipCalculatedText = document.querySelector(".tip-calculated-text");
const totalCalculatedText = document.querySelector(".total-calculated-text");
const splittedTipContainer = document.querySelector(
  ".tip-per-person-container"
);
const splittedTotalContainer = document.querySelector(
  ".total-per-person-container"
);
const splittedTipText = document.querySelector(".tip-per-person-text");
const splittedTotalText = document.querySelector(".total-per-person-text");

//TEXT FIELDS
const tipResult = document.querySelector(".tip");
const totalResult = document.querySelector(".total");
const splittedTipResult = document.querySelector(".tip-per-person");
const splittedTotalResult = document.querySelector(".total-per-person");

//BUTTONS
const btn = document.querySelector(".btn");

////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
const checkFilled = function (el) {
  if (el.value === "") {
    el.classList.add("not-filled");
    alert(`Fill required fields (marked red)`);
    return false;
  } else {
    el.classList.remove("not-filled");
    return true;
  }
};

const calculateResults = function () {
  const billValue = Number(bill.value);
  const tipValue = Number(tip.value);
  const splitCheckboxValue = splitCheckbox.checked;
  const splitAmongValue = splitAmong.value;

  // calculate result
  const tipCalculated = (billValue * tipValue) / 100;
  const totalCalculated = billValue + (billValue * tipValue) / 100;

  const displayTotal = function () {
    tipResult.textContent = tipCalculated;
    totalResult.textContent = totalCalculated;

    // display result
    tipResultContainer.classList.remove("hidden");
    totalResultContainer.classList.remove("hidden");
  };

  // check if required fields are filled
  if (splitCheckboxValue) {
    checkFilled(splitAmong);
    displayTotal();

    // calculate per person tip and total
    splittedTipResult.textContent =
      Math.round((tipCalculated / splitAmongValue) * 100) / 100;
    splittedTotalResult.textContent =
      Math.round((totalCalculated / splitAmongValue) * 100) / 100;

    // display per person tip and total
    tipCalculatedText.classList.remove("active-result");
    totalCalculatedText.classList.remove("active-result");
    splittedTipContainer.classList.remove("hidden");
    splittedTotalContainer.classList.remove("hidden");
    splittedTipText.classList.add("active-result");
    splittedTotalText.classList.add("active-result");
  } else if (checkFilled(bill) && checkFilled(tip)) {
    displayTotal();
  } else {
    return;
  }
};

////////////////////////////////////////////////////////////////////////////////
// EVENTS
btn.addEventListener("click", calculateResults);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculateResults();
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CURRENCY
////////////////////////////////////////////////////////////////////////////////////
// SELECTORS
const countrySelector = document.querySelector(".country-selector");
const currencyDisplay = document.querySelectorAll(".currency");

countrySelector.addEventListener("change", function () {
  let currency = "$";
  console.log(countrySelector.value);

  if (countrySelector.value === "australia") {
    currency = "A$";
  }
  if (countrySelector.value === "canada") {
    currency = "C$";
  }
  if (countrySelector.value === "china") {
    currency = "¥";
  }
  if (countrySelector.value === "england") {
    currency = "£";
  }
  if (countrySelector.value === "eu") {
    currency = "€";
  }
  if (countrySelector.value === "mexico") {
    currency = "Mex$";
  }
  if (countrySelector.value === "usa") {
    currency = "$";
  }
  if (countrySelector.value === "southamerica") {
    currency = "$";
  }
  if (countrySelector.value === "southafrica") {
    currency = "R";
  }
  if (countrySelector.value === "switzerland") {
    currency = "CHF";
  }
  if (countrySelector.value === "rest") {
    currency = "$";
  }

  currencyDisplay.forEach((el) => (el.textContent = currency));
});
