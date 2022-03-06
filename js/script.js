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
const recommendationText = document.querySelector(".recommendation-text");
const recommendation = document.querySelector(".recommendation");

countrySelector.addEventListener("change", function () {
  let currency = "$";
  console.log(countrySelector.value);
  const showRecommendation = function (text) {
    recommendation.classList.remove("hidden");
    recommendationText.textContent = text;
  };

  if (countrySelector.value === "australia") {
    currency = "A$";
    showRecommendation(
      "In general, Australians don't tip. Tipping in tourist areas is getting more common, here you can leave a tip of 5-10%. But if you don't feel like tipping, you don't have to, even in tourist areas."
    );
  }
  if (countrySelector.value === "canada") {
    currency = "C$";
    showRecommendation(
      "Tipping in Canada is expected. Tip 15% for normal service and 20% for exceptional service."
    );
  }
  if (countrySelector.value === "china") {
    currency = "¥";
    showRecommendation(
      "Tipping in China is generally uncommon and can even be considered rude or embarrassing in some circumstances."
    );
  }
  if (countrySelector.value === "england") {
    currency = "£";
    showRecommendation(
      "It is customary to leave 10 to 15% of the bill as tip when eating out, though some restaurants add on a service charge instead. At pubs, don't tip unless you get table service."
    );
  }
  if (countrySelector.value === "eu") {
    currency = "€";
    showRecommendation(
      "Tipping in Europe is optional. Ofthe the service fee is included in the price of the food. If you want you can tip 5-10% for good service. 10% is already considered a big tip."
    );
  }
  if (countrySelector.value === "mexico") {
    currency = "Mex$";
    showRecommendation(
      "In Mexico, 15% of the bill is a good rule of thumb to follow; if you're in a big group you may find that a service fee is automatically added. If you feel you have been given particularly great service, 20% will be greatly appreciated."
    );
  }
  if (countrySelector.value === "usa") {
    currency = "$";
    showRecommendation(
      "In the United States tipping is expected. The service personel earn most of their living off of tips. 15% is standart and 20-25% is for good service. At nice restaurants waiters might even expect 20-30%."
    );
  }
  if (countrySelector.value === "southamerica") {
    currency = "$";
    showRecommendation(
      "Many locals don't tip in small familyrun restaurants. However, a small tip is always appreciated. In upscale establishments and in tourist areas tipping is more common. As a general rule of thumb 10% works in most places. You can tip more or less depending on how the quality of the service was."
    );
  }
  if (countrySelector.value === "southafrica") {
    currency = "R";
    showRecommendation(
      "It is customary to tip good service in South Africa. An acceptable amount is 10-15%. If you have six or more in your party, restaurants will generally add a gratuity to your bill."
    );
  }
  if (countrySelector.value === "switzerland") {
    currency = "CHF";
    showRecommendation(
      "You never have to worry about tipping in Switzerland, as tips are included in the price. However, a tip of 5-10% for good service is appreciated."
    );
  }
  if (countrySelector.value === "rest") {
    currency = "$";
    if (!recommendation.classList.contains("hidden")) {
      recommendation.classList.add("hidden");
    }
  }

  currencyDisplay.forEach((el) => (el.textContent = currency));
});
