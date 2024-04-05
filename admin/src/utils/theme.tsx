"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  primaryColor: "humanity",
  focusRing: "never",
  // cursorType: 'pointer',
  primaryShade: { light: 6, dark: 9 },
  colors: {
    humanity: [
      "#eefbfa",
      "#dff4f3",
      "#baebe7",
      "#92e1da",
      "#72d7cf",
      "#60d3c9",
      "#54d0c6",
      "#45b8ae",
      "#38a49b",
      "#208e86"
    ]
  },
});