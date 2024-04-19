// Populate Copyright year
document.querySelector("#year").innerText = new Date().getFullYear();

// Select elements
const introHeading = document.querySelector(".intro h2");
const randomBtn = document.querySelector(".random");
const resetBtn = document.querySelector(".reset");
const resetSpan = document.querySelector(".reset-span");
const mainImg = document.querySelector(".main-img");
const pickAPup = document.querySelector(".pick-a-pup");
const dogDisplay = document.querySelector(".dog-display");
const noMatch = document.querySelector(".no-match");

// Display variables
const dogName = document.querySelector(".name");
const dogImg = document.querySelector("#dog-img");
const energyLevel = document.querySelector(".energy-level");
const size = document.querySelector(".size");
const description = document.querySelector(".description");

// Advanced Search elements
const advancedSearch = document.querySelector(".advanced-search");
const searchBtn = document.querySelector(".search");
const energyInput = document.querySelector("#energy");
const homeInput = document.querySelector("#home");
const sizeInput = document.querySelector("#size");

const dogsArray = [
    {
        name: "Pomeranian",
        src: "../img/pomeranian.jpg",
        alt: "Pomeranian",
        energy: "Low",
        home: "Apartment, House, Yard",
        size: "Small",
        description: "Pomeranians are spunky, cuddly, and lovable. They are great dogs for beginners because they are both easy to train and loyal. Pomeranians are also an excellent choice for those living in apartments or small homes."
    },
    {
        name: "Beagle",
        src: "../img/Beagle.jpg",
        alt: "Beagle",
        energy: "Medium",
        home: "House, Yard",
        size: "Medium",
        description: "Beagles are smart and loyal. They make great dogs for active individuals because they have relatively high energy for a breed of their size. Beagles can be more noisy than other breeds, so they do best living in a house."
    },
]

function randomDog() {
    const dogIndex = Math.floor(Math.random() * dogsArray.length);
    let randomDog = dogsArray[dogIndex];
    disaplyRandomDog(randomDog);
}

function updateDogInfo(dog) {
    dogName.innerText = dog.name;
    dogImg.src = dog.src;
    dogImg.alt = dog.alt;
    energyLevel.innerText = dog.energy;
    size.innerText = dog.size;
    description.innerText = dog.description;
}

function disaplyRandomDog(dog) {
    resetBtn.hidden = false;
    dogDisplay.hidden = false;
    mainImg.hidden = true;
    pickAPup.hidden = true;
    updateDogInfo(dog);
}

function resetSearch() {
    window.location.reload();
}

function showAdvancedSearch() {
    advancedSearch.hidden = false;
    searchBtn.hidden = false;
    randomBtn.hidden = true;
}

function advancedDogSearch() {
    let selectedEnergy = energyInput.value;
    let selectedHome = homeInput.value;
    let selectedSize = sizeInput.value;

    const dogMatches = dogsArray.filter(dog =>
        (dog.energy.includes(selectedEnergy) && dog.home.includes(selectedHome) && dog.size.includes(selectedSize))
    );

    dogMatches.forEach(dog => {
        // Create a copy of dogDisplay div
        let clone = dogDisplay.cloneNode(true);
        dogDisplay.after(clone);
        // Populate div information
        updateDogInfo(dog);
    });

    if (dogMatches.length === 0) {
        noMatch.hidden = false;
    } else {
        // Update UI
        dogDisplay.hidden = false;
        resetBtn.hidden = false;
        introHeading.hidden = true;
        randomBtn.hidden = true;
        searchBtn.hidden = true;
        mainImg.hidden = true;
        pickAPup.hidden = true;
        advancedSearch.hidden = true;
        searchBtn.hidden = true;
    };
};

function removeNoMatch() {
    noMatch.hidden = true;
}

randomBtn.addEventListener("click", randomDog);
resetBtn.addEventListener("click", resetSearch)
resetSpan.addEventListener("click", resetSearch);
energyInput.addEventListener("change", showAdvancedSearch);
searchBtn.addEventListener("click", advancedDogSearch);

energyInput.addEventListener("change", removeNoMatch);
homeInput.addEventListener("change", removeNoMatch);
sizeInput.addEventListener("change", removeNoMatch);