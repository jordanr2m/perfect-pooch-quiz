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
        description: "Pomeranians are spunky, cuddly, and lovable. They are great dogs for beginners because they are both easy to train and easy to take care of. Pomeranians are also an excellent choice for those living in apartments or small homes."
    },
    {
        name: "Beagle",
        src: "../img/Beagle.jpg",
        alt: "Beagle",
        energy: "Medium",
        home: "House, Yard",
        size: "Medium",
        description: "Beagles are smart and loyal. They make great dogs for active individuals because they have relatively high energy levels for a breed of their size. Beagles can be more noisy than other breeds, so they do best living in a house."
    },
    {
        name: "German Shepherd",
        src: "../img/german-shepherd.jpg",
        alt: "German Shepherd",
        energy: "High",
        home: "House, Yard",
        size: "Large",
        description: "German Shepherds are one of the most popular breeds in the US. They are very smart and tend to have a lot of energy. This large breed makes for a great guard dog, but they also need a lot of space to run and play."
    },
    {
        name: "Siberian Husky",
        src: "../img/husky.jpg",
        alt: "Siberian Husky",
        energy: "High",
        home: "House, Yard",
        size: "Large",
        description: "Huskies are cute and energetic. They require frequent exercise and prefer spending as much time with their owners as possible. Huskies are loyal and protective, and they can make great companions for experienced dog owners."
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
        size: "Medium to Large",
        description: "Australian Shepherds are super smart and energetic. This dog may not be the best choice for beginners, but if you have the space and time to commit to them, you won't be disappointed."
    },
    {
        name: "Shiba Inu",
        src: "../img/shiba-inu.jpg",
        alt: "Shiba Inu",
        energy: "Medium",
        home: "Apartment, House, Yard",
        size: "Small to Medium",
        description: "Shiba Inus are spunky and sassy. They have medium levels of energy, making them a good choice for active individuals. Because of their small to medium size, Shiba Inus do well in apartments as well as smaller homes."
    },
    {
        name: "Chihuahua",
        src: "../img/chihuahua.jpg",
        alt: "Chihuahua",
        energy: "Low",
        home: "Apartment, House, Yard",
        size: "Small",
        description: "Chihuahuas are a small breed with low to medium energy levels. They are a good choice for small homes and apartments. Chihuahuas have a lot of personality, but also require more training than some other small breeds."
    },
    {
        name: "Rottweiler",
        src: "../img/rottweiler.jpg",
        alt: "Rottweiler",
        energy: "Medium to High",
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
        energy: "Low to Medium",
        home: "Apartment, House, Yard",
        size: "Small",
        description: "Yorkshire Terriers, also known as Yorkies, are a cute and cuddly little breed. They may be small, but they are known for their big personalities and hearts. Because of their small size and low to medium energy levels, Yorkies can do great in any size home."
    },
    {
        name: "Maltese",
        src: "../img/maltese.jpg",
        alt: "Maltese",
        energy: "Low",
        home: "Apartment, House, Yard",
        size: "Small",
        description: "Malteses are cute, little white dogs. They have low to medium energy levels and are easy to train, making them a good choice for beginners. Malteses can do well in apartments or any other size home. One consideration is that this breed has more grooming needs than the average breed."
    },
    {
        name: "Cocker Spaniel",
        src: "../img/cocker-spaniel.jpg",
        alt: "Cocker Spaniel",
        energy: "Low to Medium",
        home: "Apartment, House, Yard",
        size: "Medium",
        description: "Cocker Spaniels became popular after the release of Disney's Lady and the Tramp. They are a medium sized breed with low to medium energy levels. Unlike other medium sized breeds, Cocker Spaniels can do well in apartments and small homes because of their lower energy levels. They are also relatively easy to train."
    },
    {
        name: "Dalmatian",
        src: "../img/dalmatian.jpg",
        alt: "Dalmatian",
        energy: "High",
        home: "House, Yard",
        size: "Large",
        description: "Dalmatians are a large breed with lots of energy. Because of this, they do best when they have access to a backyard or a nearby park. Dalmatians can be harder to train than other breeds. These dogs are recommended for experienced dog owners with active lifestyles."
    },
    {
        name: "Labrador Retriever",
        src: "../img/labrador.jpg",
        alt: "Labrador Retriever",
        energy: "High",
        home: "House, Yard",
        size: "Large",
        description: "Labrador Retrievers, or Labs for short, are among the most popular dog breeds in the US. These big dogs have high energy levels, but can do well in any size home if given proper exercise. Labs are known for being very loving and are great for families with small children."
    },
    {
        name: "Golden Retriever",
        src: "../img/golden-retriever.jpg",
        alt: "Golden Retriever",
        energy: "High",
        home: "House, Yard",
        size: "Large",
        description: "Golden Retrievers are among the most popular breeds in the US. These big dogs have a lot of energy, so they do best in a larger home or a house with a yard. Golden Retrievers typically love children and make for great family dogs."
    },
    {
        name: "Border Collie",
        src: "../img/border-collie.jpg",
        alt: "Border Collie",
        energy: "High",
        home: "House, Yard",
        size: "Medium to Large",
        description: "Border Collies are among the smartest of all dog breeds. They are a working breed as well, so they do best when both their minds and their bodies are actively engaged. For these reasons, Border Collies are a great choice for experienced dog owners who have access to lots of land for their pup to run and play, or for those who maintain a very active lifestyle."
    },
    {
        name: "Basset Hound",
        src: "../img/basset-hound.jpg",
        alt: "Basset Hound",
        energy: "Low",
        home: "Apartment, House, Yard",
        size: "Medium",
        description: "Basset Hounds are a medium sized breed with low energy levels, making them a great choice for smaller homes and even some apartments. This breed is also easy to train, making it a good choice for beginners as well as families."
    },
    {
        name: "Boxer",
        src: "../img/boxer.jpg",
        alt: "Boxer",
        energy: "High",
        home: "House, Yard",
        size: "Medium to Large",
        description: "Boxers are a medium to large sized breed with high energy levels. They do well in homes with a backyard or access to a nearby park. Boxers are known for their rambunctious energy and goofy personalities."
    },
    {
        name: "Great Dane",
        src: "../img/great-dane.jpg",
        alt: "Great Dane",
        energy: "Low to Medium",
        home: "Apartment, House, Yard",
        size: "Large",
        description: "Great Danes are known as gentle giants because they are huge in both size and heart. This breed has relatively low energy levels for its size, making it one of the few large breeds that can do well in apartments and smaller homes."
    },
    {
        name: "Pug",
        src: "../img/pug.jpg",
        alt: "Pug",
        energy: "Low",
        home: "Apartment, House, Yard",
        size: "Small",
        description: "Pugs are a small breed with low energy levels, making them a great choice for apartments and small homes. Pugs are both affectionate and regal. They are ideal lap dogs."
    },
    {
        name: "Bulldog",
        src: "../img/bulldog.jpg",
        alt: "Bulldog",
        energy: "Low",
        home: "Apartment, House, Yard",
        size: "Medium",
        description: "Bulldogs are a medium size breed with low energy levels. They are easy going and loyal, making them great family dogs. Due to their lower energy levels, Bulldogs can do well in apartments, or any other size home."
    },
    {
        name: "English Shepherd",
        src: "../img/english-shepherd.jpg",
        alt: "English Shepherd",
        energy: "High",
        home: "House, Yard",
        size: "Large",
        description: "English Shepherd are a large breed with high energy levels. They will love a home with a backyard or access to a park. English Shepherds are loyal and protective of their owners, as well as sweet and affectionate towards them."
    },
    {
        name: "West Highland Terrier",
        src: "../img/west-highland-terrier.jpg",
        alt: "West Highland Terrier",
        energy: "Medium to High",
        home: "House, Yard",
        size: "Small to Medium",
        description: "West Highland Terriers, AKA Westies, are a small to medium size breed with medium energy levels. They have distinct, feisty personalities. Westies will love living in a home with a family or with an active owner."
    },
    {
        name: "Poodle",
        src: "../img/poodle.jpg",
        alt: "Poodle",
        energy: "Medium to High",
        home: "Apartment, House, Yard",
        size: "Small, Medium, Large",
        description: "Poodles are a versatile breed. They range in size from Toy (very small) up to Standard (large). Smaller poodles can do well in smaller homes while larger poodles will prefer having more space. Poodles of all sizes are highly intelligent and energetic."
    },
    {
        name: "Pit Bull",
        src: "../img/pit-bull.jpg",
        alt: "Pit Bull",
        energy: "Medium to High",
        home: "House, Yard",
        size: "Medium to Large",
        description: "The American Pit Bull is a medium to large size breed with lots of personality. Pit Bulls love being the center of attention and showering their owners with affection. They have medium to high energy levels, so they do best in homes with a backyard or nearby park."
    },
    {
        name: "Schnauzer",
        src: "../img/schnauzer.jpg",
        alt: "Schnauzer",
        energy: "Medium to High",
        home: "Apartment, House, Yard",
        size: "Small, Medium, Large",
        description: "Like the Poodle, the Schnauzer also comes in a few different sizes: Miniature (small), Standard (medium to large), and Giant (very large). With the range in size comes a range in energy levels; Miniature Schnauzers have medium energy while Standard and Giant Schnauzers have high energy levels. All sizes are loyal, intelligent, and independent."
    },
    {
        name: "Pembroke Welsh Corgi",
        src: "../img/corgi.jpg",
        alt: "Pembroke Welsh Corgi",
        energy: "Medium",
        home: "Apartment, House, Yard",
        size: "Small",
        description: "The Pembroke Welsh Corgi, also known as the Corgi, is a spunky little breed. They have medium energy levels, but because of their small size, they can do well in apartments as well as larger homes. Corgis enjoy being active and also are a good choice for those with families."
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