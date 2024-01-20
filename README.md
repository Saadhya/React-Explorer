# learning react with chai or code
Tech Stack= Reactjs, hooks, tailwind.css

# tailwind installation
npm create vite@latest my-project -- --template react
cd my-project

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

<!-- tailwind.config.js -->
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

<!-- index.css -->
@tailwind base;
@tailwind components;
@tailwind utilities;

# react fiber instead of react-virtual dom
https://github.com/acdlite/react-fiber-architecture

The diffing algorithm is a core part of React that allows it to update the DOM efficiently. It works by comparing the previous virtual DOM with the new one and determining the most efficient way to update the actual DOM. This process significantly reduces the computational load and makes the user experience smoother and faster.
The diffing algorithm is a recursive algorithm that compares two trees, starting at the root node.
Once the algorithm has finished comparing the two trees, it will generate a list of updates that need to be made to the actual DOM. This list typically consists of a set of mutations, such as adding, removing, or updating elements.

# this repository contains following
-knowledge about react basic, react hooks, and other concepts with explanation and examples
-counter, product item = props passing and handling in efficient way
- background changer project
- optimized password generator project
- currency converter using cdn url

# to fetch free data from apis
https://openweathermap.org/api
https://restcountries.com/#endpoints-all
https://dev.to/ruppysuppy/7-free-public-apis-you-will-love-as-a-developer-166p 
https://www.freecodecamp.org/news/public-apis-for-developers/ 
https://developer.spotify.com/
