import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";

import Header from "./Header";
import Station from "./Station";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [data, setData] = useState([]);

  const theme = useMemo(
    () =>
    createMuiTheme({
      typography: {
        fontFamily: [
          "Noto Sans JP",
          "Lato",
          "游ゴシック Medium",
          "游ゴシック体",
          "Yu Gothic Medium",
          "YuGothic",
          "ヒラギノ角ゴ ProN",
          "Hiragino Kaku Gothic ProN",
          "メイリオ",
          "Meiryo",
          "ＭＳ Ｐゴシック",
          "MS PGothic",
          "sans-serif"
        ].join(",")
      },
      palette: {
        type: prefersDarkMode ? "dark" : "light"
      }
    }),
    [prefersDarkMode]
  );

  useEffect(() => {
    const fetchData = async () => {
      const json = await (await fetch("data.json")).json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="京急線 改札混雑状況" color="darkred" />
      <div style={{ paddingTop: 64}}>
        {data.map((sta) => (<Station {...sta}/>))}
      </div>
    </ThemeProvider>
  );
};

export default App;