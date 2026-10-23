<div align="center">

# 🌍 All Around the World

**Browse, search, and explore every country on the planet.**

A fast, responsive React app built with Vite and Tailwind CSS. It shows country data from the [countries.dev](https://countries.dev) API, and you can search and filter by region in light or dark mode.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-8-CA4245?logo=reactrouter&logoColor=white)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Routing](#-routing)
- [Data Source](#-data-source)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🔭 Overview

**All Around the World** is a single-page application for looking up countries. The home page shows a grid of country cards with each country's flag, population, region, and capital. Select a card to open a details page with the sub-region, top-level domain, currencies, and languages.

<!-- Add a screenshot of the app here, for example:
![App screenshot](docs/screenshot.png)
-->

---

## ✨ Features

- 🗂️ **Country grid:** flag, name, population, region, and capital for each country
- 🔎 **Search:** case-insensitive filtering by country name
- 🌐 **Region filter:** a dropdown menu built with `react-select`
- 📄 **Details page:** population, region, sub-region, capital, top-level domain, currencies, and languages
- 🌗 **Light and dark themes:** a toggle in the header that remembers your choice in `localStorage`
- ⚡ **Local caching:** the country list is saved in `localStorage` after the first visit, so later visits load instantly without calling the API
- 🖼️ **Lazy-loaded flags** to speed up the first load
- 🙅 **Empty state:** an illustrated "No results found" view when a search matches nothing
- 🧭 **404 page** for unknown routes
- ⏳ **Loading and error messages** for every network request

---

## 🛠 Tech Stack

| Category        | Technology                                                                 |
| --------------- | -------------------------------------------------------------------------- |
| UI library      | [React 19](https://react.dev) with the [React Compiler](https://react.dev/learn/react-compiler) |
| Build tool      | [Vite 8](https://vite.dev)                                                  |
| Styling         | [Tailwind CSS 4](https://tailwindcss.com) (via `@tailwindcss/vite`)         |
| Routing         | [React Router 8](https://reactrouter.com)                                   |
| Dropdown        | [react-select](https://react-select.com)                                    |
| Linting         | [Oxlint](https://oxc.rs)                                                    |
| Formatting      | [Prettier](https://prettier.io) + `prettier-plugin-tailwindcss`             |
| Fonts           | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)             |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.19+ or 22.12+ (required by Vite 8)
- **npm** (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd All_around_the_world

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the local URL that Vite prints (usually **http://localhost:5173**).

### Production build

```bash
npm run build     # outputs an optimized build to /dist
npm run preview   # serves the production build locally
```

---

## 📜 Available Scripts

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Starts the Vite dev server with hot module reload |
| `npm run build`   | Builds the app for production into `dist/`        |
| `npm run preview` | Serves the production build locally               |
| `npm run lint`    | Runs Oxlint across the project                    |

---

## 📁 Project Structure

```
All_around_the_world/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── Around_the_world.drawio   # Component / architecture diagram
│   ├── components/
│   │   ├── CountryCard.jsx           # Single country card (links to details)
│   │   ├── CountryList.jsx           # Grid of country cards
│   │   ├── EmptySearch.jsx           # "No results found" illustration
│   │   ├── Header.jsx                # Top bar: logo + theme switcher
│   │   ├── Logo.jsx                  # SVG logo, links home
│   │   ├── RegionMenu.jsx            # Region filter dropdown (react-select)
│   │   ├── SearchBar.jsx             # Country name search form
│   │   ├── ShowMessage.jsx           # Loading / error message
│   │   └── ThemeSwitcher.jsx         # Light / dark toggle
│   ├── pages/
│   │   ├── Layout.jsx                # Shared layout with <Outlet />
│   │   ├── Home.jsx                  # Search, filter, and country grid
│   │   ├── Country.jsx               # Country details page
│   │   └── NoPage.jsx                # 404 page
│   ├── useFetchData.js               # Custom hook: fetching + caching
│   ├── App.jsx                       # Router configuration
│   ├── App.css                       # Fonts + Tailwind theme tokens
│   ├── index.css                     # Tailwind entry + dark variant
│   └── main.jsx                      # App entry point
├── index.html
├── vite.config.js
├── .oxlintrc.json
├── .prettierrc
└── package.json
```

> 💡 Open `src/assets/Around_the_world.drawio` in [diagrams.net](https://app.diagrams.net) to see the app's design diagram.

---

## ⚙️ How It Works

### `useFetchData` hook

All data loading goes through one custom hook, `useFetchData(country?)`:

- **With no argument** (home page), it first checks `localStorage` for a cached `countries` list. If there's no cache, it fetches all countries from the API and saves the result.
- **With a country name** (details page), it always fetches that country from the API.

The hook returns:

```js
{
  Result,                    // full country list, or a single country object
  isLoading,                 // true while a request is in flight
  isError,                   // true if the request failed
  filteredCountriesList,     // list currently shown on the home page
  setFilteredCountriesList,  // updated by search and region filter
}
```

### Theme switching

`ThemeSwitcher` adds or removes the `dark` class on `<html>` and stores the choice in `localStorage` under the `theme` key. Tailwind's dark variant is set up as a custom variant:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

---

## 🧭 Routing

| Path                 | Page         | Description                         |
| -------------------- | ------------ | ----------------------------------- |
| `/`                  | `Home`       | Search, filter, and country grid    |
| `/country/:country`  | `Country`    | Details for the selected country    |
| `*`                  | `NoPage`     | 404 fallback                        |

All routes are rendered inside `Layout`, which provides the shared header.

---

## 🌐 Data Source

Country data comes from the public **[countries.dev](https://countries.dev)** API:

| Endpoint                                   | Used for              |
| ------------------------------------------ | --------------------- |
| `GET https://countries.dev/countries?limit=280` | Full country list |
| `GET https://countries.dev/name/{country}`      | Single country    |

> **Note:** The full list is cached in the browser's `localStorage`. To force a fresh fetch, clear the `countries` key in your browser's dev tools (Application → Local Storage).

---

## 🗺 Roadmap

- [ ] Add **Americas** (and Polar/Antarctic) to the region filter
- [ ] Combine search and region filters so they apply together
- [ ] Live search as you type (debounced)
- [ ] Responsive grid columns for mobile and tablet
- [ ] Show **border countries** as links on the details page
- [ ] Add an expiry to the `localStorage` cache
- [ ] Add unit tests (Vitest + React Testing Library)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Before submitting, run `npm run lint` and format your code with Prettier.

---

## 👤 Author

**Abdallah Ramzy Elbohy**

If you find this project useful, consider giving it a ⭐ on GitHub!
