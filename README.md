🌍 Country Explorer
An engaging, interactive web application for exploring countries around the world, showcasing both front-end development skills and attention to UI/UX. This single-page application (SPA) uses vanilla JavaScript, HTML, and CSS to provide users with a smooth and dynamic browsing experience.

✨ Features
Landing Page: Displays a paginated list of countries as interactive cards showing each country's name and flag.
Search: Real-time search bar with a dropdown showing up to 5 country suggestions. A "View All" option displays all matching results.
Country Details Page: Detailed view of each country, including fields like Name, Capital, Population, Languages, and more.
Filtering Options: Filter countries by Language or Region.
Favorites: Mark up to 5 countries as favorites, which are shown in a side section and saved in local storage.


🚀 Usage
Search: Type in the search bar at the top of the page to see dynamic suggestions.
Filters: Use Language or Region filters to narrow down displayed countries.
Favorites: Click the favorite icon on any country’s detail page to add it to the favorites list (up to 5).
Country Details: Click on a country's card to view more detailed information.
🎨 Design Decisions
UI/UX: Clean, intuitive layout for both desktop and mobile, with a clear visual hierarchy for easy navigation.
Responsive Design: Dynamic resizing across all screen sizes.
Code Structure: Modular JavaScript structure with comments to explain logic flow and ensure maintainability.
Local Storage: Favorites are stored locally, allowing users to retain their choices across sessions.



Here's a more structured and polished version for the README, with markdown styling for readability:

🌍 Country Explorer
An engaging, interactive web application for exploring countries around the world, showcasing both front-end development skills and attention to UI/UX. This single-page application (SPA) uses vanilla JavaScript, HTML, and CSS to provide users with a smooth and dynamic browsing experience.

✨ Features
Landing Page: Displays a paginated list of countries as interactive cards showing each country's name and flag.
Search: Real-time search bar with a dropdown showing up to 5 country suggestions. A "View All" option displays all matching results.
Country Details Page: Detailed view of each country, including fields like Name, Capital, Population, Languages, and more.
Filtering Options: Filter countries by Language or Region.
Favorites: Mark up to 5 countries as favorites, which are shown in a side section and saved in local storage.
📦 Setup Instructions
To set up the project locally, follow these steps:

bash
Copy code
# Clone the repository
git clone https://github.com/your-username/country-explorer.git

# Navigate to the project directory
cd country-explorer
Open the index.html file in your browser to start exploring!

🚀 Usage
Search: Type in the search bar at the top of the page to see dynamic suggestions.
Filters: Use Language or Region filters to narrow down displayed countries.
Favorites: Click the favorite icon on any country’s detail page to add it to the favorites list (up to 5).
Country Details: Click on a country's card to view more detailed information.
🎨 Design Decisions
UI/UX: Clean, intuitive layout for both desktop and mobile, with a clear visual hierarchy for easy navigation.
Responsive Design: Dynamic resizing across all screen sizes.
Code Structure: Modular JavaScript structure with comments to explain logic flow and ensure maintainability.
Local Storage: Favorites are stored locally, allowing users to retain their choices across sessions.
🧪 Testing
This project uses Mocha and Chai to test core functionalities, including:

API Calls: Ensures successful data fetching and proper error handling for failed requests.
Search Functionality: Verifies that results match user input dynamically.
Filtering: Checks that filters function correctly, independently and with the search.
Favorites Management: Confirms that up to 5 favorites can be marked, and that favorites persist in local storage.

Running Tests
To run the tests, open the test/index.html file in your browser.


Here's a more structured and polished version for the README, with markdown styling for readability:

🌍 Country Explorer
An engaging, interactive web application for exploring countries around the world, showcasing both front-end development skills and attention to UI/UX. This single-page application (SPA) uses vanilla JavaScript, HTML, and CSS to provide users with a smooth and dynamic browsing experience.

✨ Features
Landing Page: Displays a paginated list of countries as interactive cards showing each country's name and flag.
Search: Real-time search bar with a dropdown showing up to 5 country suggestions. A "View All" option displays all matching results.
Country Details Page: Detailed view of each country, including fields like Name, Capital, Population, Languages, and more.
Filtering Options: Filter countries by Language or Region.
Favorites: Mark up to 5 countries as favorites, which are shown in a side section and saved in local storage.
📦 Setup Instructions
To set up the project locally, follow these steps:

bash
Copy code
# Clone the repository
git clone https://github.com/your-username/country-explorer.git

# Navigate to the project directory
cd country-explorer
Open the index.html file in your browser to start exploring!

🚀 Usage
Search: Type in the search bar at the top of the page to see dynamic suggestions.
Filters: Use Language or Region filters to narrow down displayed countries.
Favorites: Click the favorite icon on any country’s detail page to add it to the favorites list (up to 5).
Country Details: Click on a country's card to view more detailed information.
🎨 Design Decisions
UI/UX: Clean, intuitive layout for both desktop and mobile, with a clear visual hierarchy for easy navigation.
Responsive Design: Dynamic resizing across all screen sizes.
Code Structure: Modular JavaScript structure with comments to explain logic flow and ensure maintainability.
Local Storage: Favorites are stored locally, allowing users to retain their choices across sessions.
🧪 Testing
This project uses Mocha and Chai to test core functionalities, including:

API Calls: Ensures successful data fetching and proper error handling for failed requests.
Search Functionality: Verifies that results match user input dynamically.
Filtering: Checks that filters function correctly, independently and with the search.
Favorites Management: Confirms that up to 5 favorites can be marked, and that favorites persist in local storage.
Running Tests
To run the tests, open the test/index.html file in your browser.

💡 Interesting Design Choices
Favorites Limit: Restricting favorites to 5 encourages meaningful selection.
Persistent Favorites: Using local storage to enhance user experience.
Dynamic Pagination: Designed for smooth user experience, minimizing data load on initial page load.