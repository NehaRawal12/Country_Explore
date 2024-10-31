const countryListEl = document.getElementById('country-list');
const searchInput = document.getElementById('search');
const showMoreBtn = document.getElementById('show-more');
const favoriteListEl = document.getElementById('favorite-list');
const viewFavoritesBtn = document.getElementById('view-favorites'); // Added favorites button
let allCountries = [];
let displayedCountries = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Get favorites from local storage
const countriesPerPage = 10;
let currentPage = 0;
let isViewingFavorites = false; // New variable to track if we're on the Favorites page

// Fetch country data from the API
async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        allCountries = await response.json();
        displayCountries(); // Display countries initially
        displayFavorites(); // Display favorites initially
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}

// Display countries on the main page
function displayCountries(countriesToDisplay = allCountries) {
    showMoreBtn.style.display = 'block'; // Show "Show More" on main page only
    isViewingFavorites = false; // Reset this when viewing main page

    const start = currentPage * countriesPerPage;
    const end = start + countriesPerPage;
    displayedCountries = countriesToDisplay.slice(start, end);

    countryListEl.innerHTML = ''; // Clear the current list
    displayedCountries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'country-card';

        countryCard.innerHTML = `
            <img src="${country.flags.png}" alt="${country.name.common} flag" width="100">
            <h3>${country.name.common}</h3>
        `;

        // Favorite button
        const favoriteBtn = document.createElement('button');
        favoriteBtn.className = 'favorite-btn';
        favoriteBtn.textContent = favorites.includes(country.name.common) ? 'Unfavorite' : 'Favorite';
        favoriteBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents opening the details page
            toggleFavorite(country.name.common);
        });

        // View Details button
        const detailsBtn = document.createElement('button');
        detailsBtn.textContent = 'View Details';
        detailsBtn.addEventListener('click', () => {
            displayCountryDetails(country);
        });

        countryCard.appendChild(favoriteBtn);
        countryCard.appendChild(detailsBtn);

        countryListEl.appendChild(countryCard);
    });
}


function displayCountryDetails(country) {
    showMoreBtn.style.display = 'none'; 
    const backButtonHTML = isViewingFavorites 
        ? `<button id="back-to-favorites">Back to Favorites</button>` 
        : `<button id="back">Back</button>`;

    const details = `
        <div class="country-details">
            ${backButtonHTML}
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" alt="${country.name.common} flag" class="flag">
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> ${country.area.toLocaleString()} km²</p>
            <p><strong>Languages:</strong> ${Object.values(country.languages).join(', ')}</p>
        </div>
    `;

    countryListEl.innerHTML = details;

    // Event listeners for back buttons
    if (isViewingFavorites) {
        document.getElementById('back-to-favorites').addEventListener('click', displayFavoritesPage);
    } else {
        document.getElementById('back').addEventListener('click', () => {
            displayCountries(allCountries);
        });
    }
}

// Load more countries on button click
showMoreBtn.addEventListener('click', () => {
    currentPage++;
    displayCountries();
});

// Handle search input
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredCountries = allCountries.filter(country => 
        country.name.common.toLowerCase().includes(query)
    );
    displayCountries(filteredCountries); // Show filtered countries
});

// Toggle favorite country with a limit of 5
function toggleFavorite(countryName) {
    if (favorites.includes(countryName)) {
        favorites = favorites.filter(fav => fav !== countryName); // Remove from favorites
    } else {
        if (favorites.length < 5) { // Check if favorites are less than 5
            favorites.push(countryName); // Add to favorites
        } else {
            alert('You can only favorite up to 5 countries!'); // Alert if limit is exceeded
        }
    }
    localStorage.setItem('favorites', JSON.stringify(favorites)); // Update local storage
    displayCountries(); // Refresh displayed countries
}

// Display the Favorites page with a "Back" button and "Unfavorite" option
function displayFavoritesPage() {
    showMoreBtn.style.display = 'none'; // Hide "Show More" on favorites page
    isViewingFavorites = true; // Set to true to track we're on Favorites page
    countryListEl.innerHTML = '<h2></h2>';
    
    // Back button to go back to the main page
    const backBtn = document.createElement('button');
    backBtn.className='goback'
    backBtn.textContent = 'Back TO Home';
    backBtn.addEventListener('click', () => {
        displayCountries();
    });
    countryListEl.appendChild(backBtn);

    favorites.forEach(countryName => {
        const country = allCountries.find(c => c.name.common === countryName);
        const countryCard = document.createElement('div');
        countryCard.className = 'country-card';

        countryCard.innerHTML = `
            <img src="${country.flags.png}" alt="${country.name.common} flag" width="100">
            <h3>${country.name.common}</h3>
        `;
        const unfavoriteBtn = document.createElement('button');
        unfavoriteBtn.className = 'favorite-btn';
        unfavoriteBtn.textContent = 'Unfavorite';
        unfavoriteBtn.addEventListener('click', () => {
            toggleFavorite(country.name.common); // Unfavorites and refreshes the page
            displayFavoritesPage(); 
        });

        // View Details button
        const detailsBtn = document.createElement('button');
        detailsBtn.className = 'view-details-btn'; // Add a specific clas
        detailsBtn.textContent = 'View Details';
        detailsBtn.addEventListener('click', () => {
            displayCountryDetails(country); // Show details on the same page
        });

        countryCard.appendChild(unfavoriteBtn);
        countryCard.appendChild(detailsBtn);

        countryListEl.appendChild(countryCard);
    });
}

// Event listener to view favorites
viewFavoritesBtn.addEventListener('click', displayFavoritesPage);

// Initial fetch
fetchCountries();
