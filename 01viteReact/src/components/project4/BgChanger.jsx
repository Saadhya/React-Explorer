import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("silver");
  const colorsList = [
    "olive",
    "red",
    "grey",
    "purple",
    "green",
    "yellow",
    "pink",
    "lavender",
    "black",
  ];
  const isLightColor = (color) => {
    if (window.matchMedia) {
      const query =
        window.matchMedia &&
        window.matchMedia("prefers-color-scheme: dark").matches;
      //   console.log(query);
      return query;
    }
  };
  // Check if the color is light or dark
  const isDarkMode = (color) => {
    var r, g, b, hsp;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
      // If RGB --> store the red, green, blue values in separate variables
      color = color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );

      r = color[1];
      g = color[2];
      b = color[3];
    } else {
      // If hex --> Convert it to RGB: http://gist.github.com/983661
      color = +(
        "0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
      );

      r = color >> 16;
      g = (color >> 8) & 255;
      b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return false; //for light
    } else {
      return true; //for dark
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-4xl text-white text-center my-3">BgChanger</h1>
      <br />
      <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            Color Picker{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="ml-2 h-4 w-4"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </h1>
          <p className="mt-3 text-sm text-white-600">
            The color {color} is {isDarkMode(color) ? "dark" : "light"}.
          </p>
          <input
            type="color"
            value={color}
            className="m-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>

      <br />

      <div
        className="w-full h-60 duration-200 py-2 text-black font-bold"
        style={{ backgroundColor: color, border: "2px solid black" }}
      >
        {color}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 font-normal">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colorsList.map((colr, index) => (
              <button
                key={index}
                className={`outline-none px-4 py-1 shadow-sm rounded-full ${
                  isDarkMode(colr) ? "text-white" : "text-black"
                }`}
                style={{ backgroundColor: colr }}
                onClick={() => setColor(colr)}
              >
                {colr}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
