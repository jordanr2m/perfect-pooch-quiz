// Populate Copyright year
document.querySelector("#year").innerText = new Date().getFullYear();

// Select elements
const randomBtn = document.querySelector(".random");
const resetBtn = document.querySelector(".reset");
const mainImg = document.querySelector(".main-img");
const pickAPup = document.querySelector(".pick-a-pup");
const dogDisplay = document.querySelector(".dog-display");

// Display variables
const dogName = document.querySelector(".name");
const dogImg = document.querySelector("#dog-img");
const energyLevel = document.querySelector(".energy-level");
const description = document.querySelector(".description");

const dogsArray = [
    {
        name: "Pomeranian",
        src: "../img/pomeranian.jpg",
        alt: "Pomeranian",
        energy: "Low",
        home: "Apartment",
        size: "Small",
        description: "Pomeranians are spunky, cuddly, and lovable. They are great dogs for beginners and are also an excellent choice for apartments and small homes."
    }
]

function randomDog () {
    const dogIndex = Math.floor(Math.random() * dogsArray.length);
    let randomDog = dogsArray[dogIndex];
    disaplyRandomDog(randomDog);
}

function disaplyRandomDog (dog) {
    resetBtn.hidden = false;
    mainImg.hidden = true;
    pickAPup.hidden = true;
    dogDisplay.hidden = false;
    dogName.innerText = dog.name;
    dogImg.src = dog.src;
    dogImg.alt = dog.alt;
    energyLevel.innerText = dog.energy;
    description.innerText = dog.description;
}


randomBtn.addEventListener("click", randomDog);