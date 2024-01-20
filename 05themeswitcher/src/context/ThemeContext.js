import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});



export const ThemeProvider=ThemeContext.Provider;

// custom hook to return context: instead of calling usecontext in each component we are creating custom hoook to return themecontext

export default function useTheme(){
    return useContext(ThemeContext)
}
