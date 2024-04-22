// Populate Copyright year
document.querySelector("#year").innerText = new Date().getFullYear();

// Select elements
const introHeading = document.querySelector(".intro h2");
const randomBtn = document.querySelector(".random");
const resetBtn = document.querySelector(".reset");
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
    {
        name: "German Shepherd",
        src: "../img/german-shepherd.jpg",
        alt: "German Shepherd",
        energy: "High",
        home: "House, Yard",
        size: "Large",
        description: "German Shepherds are one of the most popular breeds in the US. They are very smart and tend to have a lot of energy. This large breed makes for a good guard dog, but also needs a lot of space to run and play."
    },
    {
        name: "Siberian Husky",
        src: "../img/husky.jpg",
        alt: "Siberian Husky",
        energy: "High",
        home: "House, Yard",
        size: "Large",
        description: "Huskies are cute and energetic. They require frequent exercise and prefer spending as much time with their owners as possible. They are loyal and protective."
    },
    {
        name: "Boston Terrier",
        src: "../img/boston-terrier.jpg",
        alt: "Boston Terrier",
        energy: "Medium",
        home: "Apartment, House, Yard",
        size: "Small",
        description: "Boston Terriers are great dogs for beginners because they are easy to train and easy to love. They have medium energy levels and are fairly active, but they can still do well in apartments and small homes."
    },
    {
        name: "Australian Shepherd",
        src: "../img/australian-shepherd.jpg",
        alt: "Australian Shepherd",
        energy: "High",
        home: "House, Yard",
        size: "Medium, Large",
        description: "Australian Shepherds are super smart and energetic. This dog may not be the best choice for beginners, but if you have the space and time to commit to them, you won't be disappointed."
    },
    {
        name: "Shiba Inu",
        src: "../img/shiba-inu.jpg",
        alt: "Shiba Inu",
        energy: "Medium",
        home: "Apartment, House, Yard",
        size: "Small, Medium",
        description: "Shiba Inus are spunky and sassy. They have medium levels of energy, making them a good choice for active individuals. Because of their small to medium size, Shiba Inus do well in apartments as well as smaller homes."
    },
    {
        name: "Chihuahua",
        src: "../img/chihuahua.jpg",
        alt: "Chihuahua",
        energy: "Low, Medium",
        home: "Apartment, House, Yard",
        size: "Small",
        description: "Chihuahuas are a small breed with medium energy levels. They are a good choice for small homes and apartments. Chihuahuas have a lot of personality, but also require more training than some other small breeds."
    },
    {
        name: "Rottweiler",
        src: "../img/rottweiler.jpg",
        alt: "Rottweiler",
        energy: "Medium, High",
        home: "House, Yard",
        size: "Large",
        description: "Rottweilers are big dogs that are known for making great guard dogs. They have medium to high energy and do best with access to a backyard or nearby park. Rottweilers are loyal and give their families lots of love."
    },
    {
        name: "French Bulldog",
        src: "../img/french-bulldog.jpg",
        alt: "French Bulldog",
        energy: "Low",
        home: "Apartment, House, Yard",
        size: "Small",
        description: "French Bulldogs have been the #1 most popular dog in the US for the past several years. They are a small breed with low energy levels, making them ideal for apartments or any other living space. French Bulldogs are usually easy to train and have a calm temperament."
    },
    {
        name: "Yorkshire Terrier",
        src: "../img/yorkshire-terrier.jpg",
        alt: "Yorkshire Terrier",
        energy: "Medium",
        home: "Apartment, House, Yard",
        size: "Small",
        description: "Yorkshire Terriers, also known as Yorkies, are a cute and cuddly little breed. They may be small, but they are known for their big personalities and hearts. Because of their small size and medium energy levels, Yorkies can do great in any size home."
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
    advancedSearch.hidden = true;
    searchBtn.hidden = true;
    noMatch.hidden = true;
    updateDogInfo(dog);
}

function resetSearch() {
    window.location.reload();
}

function showAdvancedSearch() {
    advancedSearch.hidden = false;
    searchBtn.hidden = false;
}

function advancedDogSearch() {
    let selectedEnergy = energyInput.value;
    let selectedHome = homeInput.value;
    let selectedSize = sizeInput.value;

    const dogMatches = dogsArray.filter(dog =>
        (dog.energy.includes(selectedEnergy) && dog.home.includes(selectedHome) && dog.size.includes(selectedSize))
    );

    dogMatches.forEach(dog => {
        // Create & display a copy of dogDisplay div
        let clone = dogDisplay.cloneNode(true);
        dogDisplay.after(clone);
        dogDisplay.hidden = false;
        // Populate div information
        updateDogInfo(dog);
    });

    if (dogMatches.length === 0) {
        noMatch.hidden = false; 
    } else {
        // Update UI
        resetBtn.hidden = false;
        introHeading.hidden = true;
        randomBtn.hidden = true;
        searchBtn.hidden = true;
        mainImg.hidden = true;
        pickAPup.hidden = true;
        advancedSearch.hidden = true;
    };
};

function removeNoMatch() {
    noMatch.hidden = true;
}

randomBtn.addEventListener("click", randomDog);
resetBtn.addEventListener("click", resetSearch)
energyInput.addEventListener("change", showAdvancedSearch);
searchBtn.addEventListener("click", advancedDogSearch);

energyInput.addEventListener("change", removeNoMatch);
homeInput.addEventListener("change", removeNoMatch);
sizeInput.addEventListener("change", removeNoMatch);