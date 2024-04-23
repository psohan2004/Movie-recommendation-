const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

// Get the register button and popup container
const registerBtn = document.getElementById('registerBtn');
const popupContainer = document.getElementById('popupContainer');

// Function to open the popup
function openPopup() {
    popupContainer.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popupContainer.style.display = 'none';
}

// Event listener for the register button
registerBtn.addEventListener('click', openPopup);

// Prevent form submission for demonstration purposes
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add your login logic
});

// Function to open the signup popup
function openSignupPopup() {
  document.getElementById('signupPopup').style.display = 'block';
}

// Function to close the signup popup
function closeSignupPopup() {
  document.getElementById('signupPopup').style.display = 'none';
}
