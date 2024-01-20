import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual changes in theme
  useEffect(() => {
    const htmlTheme = document.querySelector("html").classList;
    htmlTheme.remove("light", "dark");
    htmlTheme.add(themeMode);
  }, [themeMode]);
  return (
    <>
      {/* to access value directly provided by themecontext  */}
      <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
        {/* <h1 className="bg-blue-500 p-4 text-center text-3xl">Vite + React</h1> */}

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* theme button */}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
