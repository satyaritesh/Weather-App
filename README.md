# 🌤️ Glassmorphic Weather App

A modern, responsive, and visually stunning web application that provides real-time weather details and forecasts using the OpenWeatherMap API. Built with clean vanilla JavaScript, custom CSS, and HTML5, the app features an elegant glassmorphism design with dynamic autocomplete search capabilities.

🔗 **[Live Demo on Vercel](https://weather-app-three-beta-98.vercel.app/)**

---

## 📸 Interface Preview

![Weather App Screen Interface](WeatherAppProof/WeatherAppLive.png)

---

## ✨ Features

*   🔍 **Dynamic Autocomplete Suggestions**: Leverages OpenWeatherMap's Geocoding API to suggest matching cities and states instantly as you type.
*   🌡️ **Real-time Weather Metrics**: Displays temperature, current date, and conditions (e.g., partly cloudy, moderate rain) prominently.
*   📊 **Comprehensive Weather Details**:
    *   *Feels Like* Temperature
    *   *Wind Speed* (with Direction)
    *   *Humidity* levels
    *   *Visibility* (in km)
    *   *Atmospheric Pressure*
*   🌅 **Astronomical & Forecast Data**:
    *   *Sunrise & Sunset* times (adjusted to local times)
    *   *Maximum & Minimum Temperatures* for the day
    *   *Ground Level & Sea Level* pressures
*   🎨 **Premium Glassmorphic Design**: Clean cards with semi-transparent overlays, sleek white borders, subtle box-shadow transitions, and smooth scaling micro-animations on hover.
*   📱 **Fully Responsive Layout**: Built using CSS Grid, Flexbox, and fluid typography (`clamp()`) to adapt flawlessly from standard desktops to tablets and mobile screens.

---

## 🛠️ Technology Stack

| Technology | Purpose | Key Implementation Details |
| :--- | :--- | :--- |
| **HTML5** | Structure | Semantic HTML5 structure with datalists for search suggestions. |
| **CSS3** | Styling & Animations | Glassmorphism (`rgba`), Flexbox, CSS Grid, media queries, and Font Awesome v6 icons. |
| **JavaScript (ES6+)** | Application Logic | Fetch API, async/await, Geocoding suggestions, dynamic DOM manipulation. |
| **OpenWeatherMap API** | Weather Data Source | Current Weather API & Direct Geocoding API integration. |
| **Vercel** | Deployment | Continuous integration and hosting. |

---

## 📂 Project Structure

```bash
├── WeatherAppProof/
│   ├── Weather App Proof.pdf     # Deployment verification document
│   ├── WeatherAPPGhProof.png     # GitHub repository proof screenshot
│   ├── WeatherAppLive.png        # Screenshot of the live application interface
│   └── WeatherAppVercelProof.png # Vercel deployment status screenshot
├── images/                       # Directory for assets/images (empty)
├── icon.jpg                      # Browser favicon image
├── index.html                    # Main HTML markup
├── script.js                     # OpenWeather API integration and search suggestions
├── style.css                     # Responsive layouts, themes, and animations
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

You need a web browser (e.g., Google Chrome, Firefox, Safari) and a text editor. Optionally, an OpenWeatherMap API key (the application has a key embedded, but you can generate your own).

### Installation & Run

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/satyaritesh/Weather-App.git
    ```
2.  **Navigate into the Project Folder**:
    ```bash
    cd "Weather App"
    ```
3.  **Open in Browser**:
    Simply open the `index.html` file in your preferred web browser, or use a local development server like Live Server in VS Code.

### Configuring Your API Key (Optional)

If you'd like to use your own OpenWeatherMap API key, open `script.js` and update the `apikey` constant:

```javascript
// script.js
const apikey = "YOUR_API_KEY_HERE";
```

---

## 📈 Future Enhancements

*   [ ] 📍 **Geolocation Detection**: Instantly load weather data for the user's current location upon loading.
*   [ ] 📅 **5-Day Hourly Forecast**: Add detailed charts/graphs to view temperature trends.
*   [ ] 🔄 **Unit Toggle**: Toggle between Metric (Celsius, m/s) and Imperial (Fahrenheit, mph).
*   [ ] ❤️ **Saved Locations**: Allow users to save their favorite cities for quick viewing.
*   [ ] 🌙 **Dynamic Backgrounds**: Change background images dynamically based on current weather conditions (e.g., rainy, sunny, snowy).

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Acknowledgments

*   Font families courtesy of [Google Fonts](https://fonts.google.com/) (Work Sans).
*   Icons provided by [Font Awesome](https://fontawesome.com/).
*   Weather data powered by [OpenWeatherMap API](https://openweathermap.org/).
