import type { Preview } from '@storybook/react-vite';
import { createElement } from 'react';
import { GlobalStyles } from '../src/theme/GlobalStyles';

/**
 * Global Storybook configuration.
 *
 *  - `decorators`  : inject the app's <GlobalStyles> (Inter font, reset, dark
 *                    body) so every component renders exactly as it does in the
 *                    real app.
 *  - `a11y`        : surface accessibility violations in the test UI.
 *
 * The dark page background comes from <GlobalStyles> (`body { background }`),
 * which applies inside the story iframe just like in the app.
 */
const preview: Preview = {
  decorators: [
    (Story) => createElement('div', null, createElement(GlobalStyles), createElement(Story)),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
