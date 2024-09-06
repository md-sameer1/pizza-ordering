import { createTheme, CssBaseline, GlobalStyles } from "@mui/material";
import React, { createContext, useContext, useState, ReactNode } from "react";
import Header from "./components/Header";

interface AppState {
  pizza: any;
  setPizza: any;
  addTopping: any;
  addBase: any;
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        background:
          "radial-gradient(circle, rgba(100,0,123,1) 0%, rgba(62,20,86,1) 100%)",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        fontFamily: "Roboto, sans-serif",
      },
    }}
  />
);

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [pizza, setPizza] = useState<any>({ base: "", toppings: [] });

  console.log("pizza", pizza);

  const addBase = (base: any) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping: any) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item: any) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <AppContext.Provider value={{ pizza, setPizza, addBase, addTopping }}>
      <Header />

      <CssBaseline />
      {globalStyles}

      <main>{children}</main>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
