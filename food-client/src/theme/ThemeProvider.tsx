"use client";
import React, { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};
