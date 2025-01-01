import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  console.log(theme);

  const themeColor = {
    light: {
      background: "#ffffff",
      color: "#000000",
    },
    dark: {
      background: "grey",
      color: "#ffffff",
    },
    blue: {
      background: "blue",
      color: "yellow",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        background: themeColor[theme].background,
        color: themeColor[theme].color,
        minHeight: "95vh",
        flexDirection: "column",
      }}
    >
      <h1>Light/Dark theme</h1>
      <h1>{theme} theme</h1>
      <button
        onClick={(e) => {
          //     console.log(e.target.name, "hello");
          setTheme((prevTheme) =>
            prevTheme === "light"
              ? "dark"
              : prevTheme === "dark"
              ? "blue"
              : "light"
          );
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
