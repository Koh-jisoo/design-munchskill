import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../src/styles/global-theme";

addDecorator(Story => <ThemeProvider theme={THEME}><Story /></ThemeProvider>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
