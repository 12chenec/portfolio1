import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #0d135a;
    --navy: #1d2360;
    --light-navy: #24296e;
    --lightest-navy: #393d77;
    --navy-shadow: rgba(13, 19, 90, 0.7);
    --light-shadow: rgba(13, 19, 90, 0.3);
    --dark-slate: rgba(255, 255, 255, 0.3);
    --slate: rgb(237, 237, 255);
    --light-slate: rgb(215, 217, 255);
    --lightest-slate: rgb(242, 243, 255);
    --white: rgb(243, 248, 255);
    --green: rgb(142, 255, 255);
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --lightblue: #57cbff;
    --yellow: #fcecba;
    --purple: #6e6ae2;
    --darkblue: #1e69e1;
    --orange: #f4b18a;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'Archia', 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 15px;
    --fz-xs: 15px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
