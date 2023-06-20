import {withThemeFromJSXProvider} from '@storybook/addon-styling';
import {ThemeProvider} from '@emotion/react';
import GlobalStyles from '../src/GlobalStyles';
import theme from '../src/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
  withThemeFromJSXProvider({
    themes: {
      'default': theme
    },
    defaultTheme: 'default',
     Provider: ThemeProvider,
     GlobalStyles,
  })],
};

export default preview;
