document.getElementById("currentYear").textContent = new Date().getFullYear();

let submitBtn = document.getElementById("cardForm");
let submitBtn_A = document.getElementById("cardForm-after");
let spinner = document.querySelector(".spinner");
let closeBtn = document.querySelector(".close-btn");
let errorPopOut = document.querySelector(".error-msg");
let overlay = document.querySelector(".overlay");

spinner.classList.add("visible");

let cards = []; // This array will store the cards that the user has added to the deck
let cardObjects = []; // This array will store the card objects that the user has added to the deck

async function fetchData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    return data; // This is the JSON from the response (will return all the data of cards in the game)
  } catch (error) {
    console.error("Error reading data.json:", error);
    throw error;
  }
}

let card = document.querySelector(".card-display");

async function handleData(userRequest) {
  try {
    if (cards.length == 8) {
      alertMessage(
        "You have already checked 8 cards :) that should be enough for a deck haha!"
      );
    } else {
      const data = await fetchData();
      if (data && data.items && data.items.length > 0) {
        let cardFound = false;
        for (let item of data.items) {
          if (userRequest == item.name.toLowerCase()) {
            console.log(userRequest);
            cardObjects.push(item);
            console.log(cardObjects);
            cards.push(userRequest);
            const addCard = `<div class="card-1">
                                <div class="image-container">
                                  <img class="image" src="${
                                    item.iconUrls.evolutionMedium
                                      ? item.iconUrls.evolutionMedium
                                      : item.iconUrls.medium
                                  }" />
                                </div>
                                <div class="body-container">
                                  <p>Card Name: ${item.name}</p>
                                  <p>Rarity: ${
                                    item.rarity[0].toUpperCase() +
                                    item.rarity.slice(1)
                                  }</p>
                                  <p>Elixir Cost: ${item.elixirCost}</p>
                                  <p>Supercell ID: ${item.id}</p>
                                  <p>Evolution: ${
                                    item.iconUrls.evolutionMedium ? "YES" : "NO"
                                  }</p>
                                </div>
                              </div>`;

            // card.insertAdjacentHTML("afterbegin", addCard); // This will add the card to the deck (at the top) - This is the same as the line below
            // card.innerHTML = addCard + card.innerHTML; // This will add the card to the deck (at the top)
            // the bellow method will add the card to the deck (at the bottom)
            card.innerHTML = cardObjects.map((item) => {
              return `<div class="card-1">
                                <div class="image-container">
                                  <img class="image" src="${
                                    item.iconUrls.evolutionMedium
                                      ? item.iconUrls.evolutionMedium
                                      : item.iconUrls.medium
                                  }" />
                                </div>
                                <div class="body-container">
                                  <p>Card Name: ${item.name}</p>
                                  <p>Rarity: ${
                                    item.rarity[0].toUpperCase() +
                                    item.rarity.slice(1)
                                  }</p>
                                  <p>Elixir Cost: ${item.elixirCost}</p>
                                  <p>Supercell ID: ${item.id}</p>
                                  <p>Evolution: ${
                                    item.iconUrls.evolutionMedium ? "YES" : "NO"
                                  }</p>
                                </div>
                              </div>`;
            });

            if (cards.length == 8) {
              card.innerHTML = "";
            }

            let imageContainer = card.querySelector(".image-container"); // This will select the image container of the card

            if (item.iconUrls.evolutionMedium) {
              imageContainer.classList.add("evo"); // This will add the class "evo" to the image container of the card if the card has an evolution which will show a glowing border around the card
            }

            cardFound = true;
            break;
          }
        }

        if (!cardFound) {
          alertMessage("Invalid Card");
        }
      }
    }
  } catch (error) {
    console.error("Error handling data:", error);
  }
}

submitBtn.addEventListener("submit", function (event) {
  event.preventDefault();

  var userInput = document.getElementById("cardName").value.toLowerCase();

  if (cards.includes(userInput)) {
    alertMessage("The card already exists in the current deck!");
  } else {
    if (userInput == "") {
      alertMessage("Please enter a valid input :)");
    } else {
      document.getElementById("cardName").value = "";

      setTimeout(() => {
        submitBtn_A.style.opacity = 1;
      }, 3000);

      setTimeout(() => {
        submitBtn.style.display = "none";
        spinner.classList.remove("visible");
      }, 500);

      setTimeout(() => {
        spinner.classList.add("visible");
        handleData(userInput);
      }, 2500);

      submitBtn.classList.add("fadeOut");
      submitBtn_A.classList.add("fadeIn");
    }
  }
});

submitBtn_A.addEventListener("submit", function (event) {
  event.preventDefault();
  var userInput = document.getElementById("cardName-after").value.toLowerCase();
  if (cards.includes(userInput)) {
    alertMessage("The card already exists!");
  } else {
    if (userInput == "Please enter a valid input :)") {
      alertMessage();
    } else {
      handleData(userInput);
      document.getElementById("cardName-after").value = "";
    }
  }
});

const alertMessage = function (message = "Something went wrong!") {
  const existingErrorMsg = errorPopOut.querySelector("p");
  if (existingErrorMsg) {
    existingErrorMsg.remove();
  }

  errorPopOut.classList.remove("opacity");
  overlay.classList.remove("opacity");

  const errorMsg = `<p>${message}</p>`;

  errorPopOut.insertAdjacentHTML("beforeend", errorMsg);
};

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  errorPopOut.classList.add("opacity");
  overlay.classList.add("opacity");
});

// async function handleData(userRequest) {
//   try {
//     console.log(userRequest);
//     const data = await fetchData();
//     if (data && data.items && data.items.length > 0) {
//       for (let item of data.items) {
//         if (userRequest == item.name.toLowerCase()) {
//           console.log("Card Name:", item.name);
//           console.log("Card ID:", item.id);
//           console.log(
//             "Rare:",
//             item.rarity[0].toUpperCase() + item.rarity.slice(1)
//           );
//           console.log("Elixir Cost:", item.elixirCost);
//           console.log("Image URL:", item.iconUrls.medium);
//         }
//       }
//     }
//   } catch (error) {
//     console.error("Error handling data:", error);
//   }
// }
